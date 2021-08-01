/*
TODO LIST:
[X] - Mouse Support
[X] - Keyboard Support
[] - Mobile / Touch Support
[] - Optlists
[] - HTML inside the options.
[] - Async filter functions.
*/


class UIAutocomplete extends HTMLElement {
    constructor() {
        super();
        this._selectedIndex = -1;
        this._options = [];
        this._suggestions = [];
        this._isOpen = false;      
        this._filterSuggestions = (query) => (this._options.filter((option) => (query.length && option.toLowerCase().includes(query.toLowerCase()))));

        while (this.firstElementChild) {
            if (this.firstElementChild.nodeName.toLowerCase() == "option")
                this._options.push(this.firstElementChild.value);
            this.removeChild(this.firstElementChild);
        }

        this.createOverlay();
        this.createInput();
    }

    connectedCallback() {
        this.appendChild(this.input);
        this.appendChild(this.overlay);
    }

    disconnectedCallback() {
        this.removeChild(this.input);
        this.removeChild(this.overlay)
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.style.display = "none";
        this.overlay.style.position = "absolute";
        this.overlay.classList.add("ui-autocomplete-menu");

        this.overlayInner = document.createElement('ul');
        this.overlayInner.classList.add('ui-autocomplete-inner');
        this.overlayInner.setAttribute("tabindex", "-1");
        this.overlayInner.setAttribute("role", "listbox");
        this.overlayInner.setAttribute("aria-expanded", "false");
        this.overlayInner.setAttribute("id", `${this.id}-suggestions`);

        this.overlay.appendChild(this.overlayInner);

        this.overlay.addEventListener("mousedown", (e) => {
            e.preventDefault();
        });

        this.overlay.addEventListener("mouseup", (e) => {
            if (e.button != 0) return;
            if (e.target.nodeName.toLowerCase() != "option") return;
            
            this.input.value = e.target.value;
            this.close();
        }); 

        this.overlay.addEventListener("mouseover", (e) => {
            if (e.target.nodeName.toLowerCase() != "option") return;

            const index = this._suggestions.indexOf(e.target);
            
            /*if (this._selectedIndex > -1) {
               this._suggestions[this._selectedIndex].setAttribute("aria-selected", "false");
            }

            this._selectedIndex = index;
            e.target.setAttribute("aria-selected", "true");*/
            this.select(index);
        });

        this.overlay.addEventListener("mouseout", (e) => {
            if (e.target.nodeName.toLowerCase() != "option") return;

            const index = this._suggestions.indexOf(e.target);

            if (index != this._selectedIndex) return;

            /*if (this._selectedIndex > -1) {
                this._suggestions[this._selectedIndex].setAttribute("aria-selected", "false");
            }

            this._selectedIndex = -1;
            e.target.setAttribute("aria-selected", "false");*/

            this.deselect();
        });
    }

    createInput() {
        this.input = document.createElement('input');
        this.input.setAttribute("type", "autocomplete"); 
        if (this.hasAttribute("placeholder")) 
            this.input.setAttribute("placeholder", this.getAttribute("placeholder"));
        this.input.setAttribute("aria-autocomplete", "both");
        this.input.setAttribute("aria-owns", this.overlay.id);
        this.input.setAttribute("role", "combobox");
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("aria-activedescendant", "");

        this.input.addEventListener("blur", () => {
            this.close();
        });

        this.input.addEventListener("keyup", (e) => {
           if (e.key == "Enter") {
                this.close(); 
           }
        });

        this.input.addEventListener("input", (e) => {
            this._typedValue = this.input.value;

            this.update();

            if (!this._isOpen) {
                this.open();
            }
        });

        this.input.addEventListener("click", () => {
            if (this.overlay.style.display != "none") {
                this.close();
            } else {
                this.open();
            }
        });

        this.input.addEventListener("keydown", (e) => { 
            if (e.key == "ArrowDown") {
                if (this._selectedIndex + 1 < this._suggestions.length) {
                   /*if (this._selectedIndex > -1) { 
                    this._suggestions[this._selectedIndex].setAttribute("aria-selected", "false");
                   }   
                   this._selectedIndex++;
                   this.input.value = this._suggestions[this._selectedIndex].value;
                   this._suggestions[this._selectedIndex].setAttribute("aria-selected", "true");
                   this._suggestions[this._selectedIndex].scrollIntoView({
                       behavior: 'smooth',
                       block: 'nearest'
                   });*/
                   this.select(this._selectedIndex + 1);
                }
                e.preventDefault();
            } else if (e.key == "ArrowUp") {
                if (this._selectedIndex == 0) {
                    //this._suggestions[this._selectedIndex].setAttribute("aria-selected", "false");
                    //this.input.value = this._typedValue;
                    //this._selectedIndex = -1;
                    this.deselect();
                } else if (this._selectedIndex > 0) {
                    //this._suggestions[this._selectedIndex].setAttribute("aria-selected", "false");
                    //this._selectedIndex--;
                    //this.input.value = this._suggestions[this._selectedIndex].value;
                    //this._suggestions[this._selectedIndex].setAttribute("aria-selected", "true");
                    /*this._suggestions[this._selectedIndex].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });*/
                    this.select(this._selectedIndex - 1);
                    e.preventDefault();
                } 
            } else if (e.key == "Enter") {
                if (this._selectedIndex > -1) {
                    e.preventDefault();
                    this.deselect();
                    //this._selectedIndex = -1;
                    this.close();
                } 
            }
        });
   }

    createSuggestion(value) {
        const option = document.createElement("option");
        option.value = value;
        option.appendChild(document.createTextNode(value));
        option.classList.add('ui-menu-item');
        return option;
    }

    open() {
        this.overlay.style.display = "block";
        this.overlay.setAttribute("aria-hidden", "false");
        this.overlay.setAttribute("aria-expanded", "true");
        
        const rect = this.input.getBoundingClientRect();

        this.overlay.style.width = (rect.right - rect.left) + "px";
        this.overlay.style.left = rect.left + "px";
        this.overlay.style.top = rect.bottom + "px"

        this._isOpen = true;
    }

    close() {
        this.overlay.style.display = "none";
        this.overlay.setAttribute("aria-hidden", "true");
        this.overlay.setAttribute("aria-expanded", "false");

        this._isOpen = false;
    }

    update() {
        const value = this.input.value;
        const suggestions = this._filterSuggestions(value);
        const prevSelectedValue = this._selectedIndex == -1? "" : this._suggestions[this._selectedIndex].value;
        this._suggestions = [];
        this._selectedIndex = -1;

        const suggestionFragment = document.createDocumentFragment();

        suggestions.forEach((suggestion, index) => {
            const suggElement = this.createSuggestion(suggestion);
            suggestionFragment.appendChild(suggElement);
            this._suggestions.push(suggElement);


            if (prevSelectedValue == suggestion) {
                //suggElement.setAttribute("aria-selected", "true");
                //suggElement.id = `${this.id}-activeelement`;
                //this._selectedIndex = index;
                //this.setAttribute("aria-activedescendant", suggElement.id);
                this.select(index);
            }
        });
        
        while (this.overlayInner.firstChild) {
            this.overlayInner.removeChild(this.overlayInner.firstChild);
        }

        this.overlayInner.appendChild(suggestionFragment);
    }

    deselect() {

    }

    select(index) {

    }

    set value(value) {

    }

    get value() {
        return this.input.value;
    }
}

window.customElements.define('ui-autocomplete', UIAutocomplete);
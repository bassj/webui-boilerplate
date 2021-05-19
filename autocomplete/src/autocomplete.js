import "./autocomplete.css";

class UIAutocomplete extends HTMLElement {
    constructor() {
        super();

        this.source = [];
        this.suggestions = [];
        this._selectedSuggestion = -1;
        this._typedValue = "";
        this.inputElement = null;
        this.sourceElement = null;
        this.overlayElement = document.createElement('ul');
        this.overlayElement.style.display = "none";
        this.overlayElement.style.position = "absolute";
        this.overlayElement.classList.add("ui-autocomplete-menu");
        this.overlayElement.setAttribute("tabindex", "-1");
        this.overlayElement.setAttribute("id", this.getAttribute("id")+"-suggestions");
        this.overlayElement.setAttribute("role", "listbox");
        this.overlayElement.setAttribute("aria-expanded", "false");

        document.addEventListener('DOMContentLoaded', () => {
            this.inputElement = this.querySelector("input");
            this.inputElement.setAttribute("aria-autocomplete", "list");
            this.inputElement.setAttribute("aria-owns", this.overlayElement.id);
            this.inputElement.setAttribute("role", "combobox");

            if ('source' in this.inputElement.dataset) {
                this.sourceElement = document.getElementById(this.inputElement.dataset.source);

                let cntr = 0;

                for (const child of this.sourceElement.children) {
                    const overlay = document.createElement('li');
                    overlay.setAttribute("id", this.overlayElement.id + "-opt-" + cntr);
                    overlay.setAttribute("role", "option");
                    overlay.classList.add("ui-menu-item");
                    overlay.innerText = child.value;
                    
                    const source = {    
                        value: child.value,
                        overlayElement: overlay
                    };

                    overlay.addEventListener("mouseover", () => {
                        const index = this.suggestions.indexOf(source);
                        if (this._selectedSuggestion > -1) {
                            this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
                        }
                        
                        this._selectedSuggestion = index;
                        overlay.classList.add("focus");
                    });

                    this.source.push(source);
                    this.overlayElement.appendChild(overlay);
                    cntr++;
                }
            }

            this.inputElement.addEventListener("focus", () => {                
                this._selectedSuggestion = -1;
            });

            this.inputElement.addEventListener("blur", () => {
                this.hideSuggestions();
            });

            this.inputElement.addEventListener("keyup", (e) => {
                if (e.key == "Enter") {
                    this.hideSuggestions();
                }
            });

            this.inputElement.addEventListener("keydown", (e) => {
                if (e.key == "ArrowDown") {
                    this.nextFocus();
                } else if (e.key == "ArrowUp") {
                    if (this._selectedSuggestion > -1) {
                        this.prevFocus();
                        e.preventDefault();
                    }
                }
            });

            this.inputElement.addEventListener("input", (e) => {
                this._typedValue = this.inputElement.value;
                this.updateSuggestions();
            });

            this.overlayElement.addEventListener("mousedown", (e) => {
                e.preventDefault();
            });

            this.overlayElement.addEventListener("mouseup", (e) => {
                if (this._selectedSuggestion > -1) {
                    const suggestion = this.suggestions[this._selectedSuggestion];
                    this.inputElement.value = suggestion.value;
                    this._typedValue = suggestion.value;
                    this.updateSuggestions();
                    this.hideSuggestions();
                }
            });
        });
    }

    connectedCallback() {
        document.body.appendChild(this.overlayElement);
    }

    disconnectedCallback() {
        document.body.removeChild(this.overlayElement);
    }

    showSuggestions() {
        this.overlayElement.style.display = "flex";
        this.overlayElement.setAttribute("aria-hidden", "false");
        this.overlayElement.setAttribute("aria-expanded", "true");
        
        const rect = this.inputElement.getBoundingClientRect();

        this.overlayElement.style.width = (rect.right - rect.left - 2) + "px";
        this.overlayElement.style.left = rect.left;
        this.overlayElement.style.top = rect.bottom;

        //this.updateSuggestions();
    }

    hideSuggestions() {
        this.overlayElement.style.display = "none";
        this.overlayElement.setAttribute("aria-hidden", "true");
        this.overlayElement.setAttribute("aria-expanded", "false");
        
    }

    updateSuggestions() {
        const value = this._typedValue.toLowerCase();

        this.suggestions = [];
        for (const item of this.source) {
            if (item.value.toLowerCase().includes(value) && value.length > 0) {
                item.overlayElement.style.display = "block";
                this.suggestions.push(item);
            } else {
                item.overlayElement.style.display = "none";
                item.overlayElement.classList.remove("focus");
            }
        }

        if (this.suggestions.length == 0) {
            this._selectedSuggestion = -1;
            this.hideSuggestions();
        } else {
            if (this._selectedSuggestion >= this.suggestions.length) {
                this._selectedSuggestion = this.suggestions.length - 1;
            }
            this.showSuggestions();
        }
    }

    nextFocus() {
        if (this._selectedSuggestion + 1 < this.suggestions.length) {
            if (this._selectedSuggestion > -1) {
                this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
            }
            this._selectedSuggestion += 1;
            const suggestion = this.suggestions[this._selectedSuggestion];
            suggestion.overlayElement.classList.add("focus");
            this.inputElement.value = "";
            this.inputElement.value = suggestion.value;
        }
    }

    prevFocus() {
        if (this._selectedSuggestion > -1) {
            this.suggestions[this._selectedSuggestion].overlayElement.classList.remove("focus");
            this._selectedSuggestion -= 1;

            if (this._selectedSuggestion == -1) {
                this.inputElement.focus();
                this.suggestions[0].overlayElement.classList.remove("focus");
            } else {
                const suggestion = this.suggestions[this._selectedSuggestion];
                suggestion.overlayElement.classList.add("focus");
                this.inputElement.value = "";
                this.inputElement.value = suggestion.value;
            }
        }
    }
}

window.customElements.define('ui-autocomplete', UIAutocomplete);
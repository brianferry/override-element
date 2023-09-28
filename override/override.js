var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let OverrideStyles = class OverrideStyles extends LitElement {
    getSlottedElements() {
        var _a, _b;
        if (!this.renderRoot)
            return;
        const elements = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot')) === null || _b === void 0 ? void 0 : _b.assignedNodes({ flatten: true });
        return elements;
    }
    firstUpdated(_changedProperties) {
        // @ts-ignore
        const myElements = this.getSlottedElements();
        myElements === null || myElements === void 0 ? void 0 : myElements.forEach((myElement) => {
            console.log('myElement - one', myElement);
            // @ts-ignore
            if (myElement && myElement.shadowRoot && myElement.shadowRoot.adoptedStyleSheets !== undefined) {
                // @ts-ignore
                myElement.shadowRoot.adoptedStyleSheets = [...myElement.shadowRoot.adoptedStyleSheets, this.constructor.styles];
            }
        });
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
};
OverrideStyles.styles = [
    css ` 
      :host { color: pink; }
    `
];
OverrideStyles = __decorate([
    customElement('override-styles')
], OverrideStyles);
export { OverrideStyles };
//# sourceMappingURL=override.js.map
import {LitElement, html, css} from 'lit';
import type { PropertyValues } from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('override-styles')
export class OverrideStyles extends LitElement {

  static override styles = [
    css` 
      :host { color: pink; }
    `
  ];

  getSlottedElements() {
    if (!this.renderRoot) return;
    const elements = this.renderRoot?.querySelector('slot')?.assignedNodes({ flatten: true});
    return elements;
  }

  override firstUpdated(_changedProperties: PropertyValues<this>) {
    // @ts-ignore
    const myElements = this.getSlottedElements() as HTMLElement[];

    myElements?.forEach((myElement: HTMLElement) => {
      // @ts-ignore
      if (myElement && myElement.shadowRoot && myElement.shadowRoot.adoptedStyleSheets !== undefined) {
        // @ts-ignore
        myElement.shadowRoot.adoptedStyleSheets = [...myElement.shadowRoot.adoptedStyleSheets, this.constructor.styles];
      }
    });
  }

  override render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'override-styles': OverrideStyles;
  }
}

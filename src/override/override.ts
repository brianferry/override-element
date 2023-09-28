import {LitElement, html} from 'lit';
import type { PropertyValues } from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('override-styles')
export class OverrideStyles extends LitElement {

  getStyleSlottedElement() {
    if (!this.renderRoot) return;
    // @ts-ignore
    const elements = this.renderRoot?.querySelector('slot[name="styles"]')?.assignedNodes({ flatten: true});
    return elements;
  }

  getAnonymousSlottedElement() {
    if (!this.renderRoot) return;
    const elements = this.renderRoot?.querySelectorAll('slot')[1]?.assignedNodes({ flatten: true});
    return elements;
  }

  override firstUpdated(_changedProperties: PropertyValues<this>) {
    // @ts-ignore
    const anonymousSlot = this.getAnonymousSlottedElement()[0] as HTMLElement;
    const styleSlot = this.getStyleSlottedElement()[0] as HTMLElement;

    console.log('anonymousSlot', anonymousSlot);
    console.log('styleSlot', styleSlot);

    // @ts-ignore
    if (anonymousSlot && anonymousSlot.shadowRoot && anonymousSlot.shadowRoot.adoptedStyleSheets !== undefined) {
      const styleSheet = new CSSStyleSheet();
      console.log('gets here');
      // @ts-ignore
      styleSheet.replaceSync(styleSlot.innerHTML.replace('<style>', '').replace('</style>', '').trim());
      console.log('styleSheet', styleSheet);
      // @ts-ignore
      anonymousSlot.shadowRoot.adoptedStyleSheets = [...anonymousSlot.shadowRoot.adoptedStyleSheets, styleSheet];
    }
  }

  override render() {
    return html`
      <slot name="styles"></slot>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'override-styles': OverrideStyles;
  }
}

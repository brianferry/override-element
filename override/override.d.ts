import { LitElement } from 'lit';
import type { PropertyValues } from 'lit';
export declare class OverrideStyles extends LitElement {
    static styles: import("lit").CSSResult[];
    getSlottedElements(): Node[] | undefined;
    firstUpdated(_changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'override-styles': OverrideStyles;
    }
}
//# sourceMappingURL=override.d.ts.map
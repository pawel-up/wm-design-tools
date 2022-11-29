import Element from "../dt-toolbar/dt-toolbar.js";

window.customElements.define('dt-toolbar', Element);

declare global {
  interface HTMLElementTagNameMap {
    'dt-toolbar': Element;
  }
}

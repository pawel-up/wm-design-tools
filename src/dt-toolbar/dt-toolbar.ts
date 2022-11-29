/* eslint-disable lit-a11y/aria-attrs */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { property, state } from 'lit/decorators.js';
// import { classMap } from 'lit/directives/class-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';
import elementStyles from './dt-toolbar.styles.js';
import colors from '../theme/colors.module.js';
import typography from '../theme/typography.module.js';
import buttons from '../theme/buttons.module.js';
import * as Icons from '../icons/icons.js';
import { ILayoutInfo } from '../types.js';
import defaultLayout from './DefaultLayout.js'

export default class DtToolbarElement extends LitElement {
  static get styles(): CSSResult[] {
    return [colors, typography, buttons, elementStyles];
  }

  /**
   * The currently selected tool.
   */
  @property({ type: String }) selected?: string;

  /**
   * The state of the layouts rendered in the UI.
   */
  @state() protected layouts: ILayoutInfo[];

  /**
   * The currently selected layout to render details for.
   */
  @state() protected selectedLayout?: number;

  constructor() {
    super();
    this.layouts = [];
    this.addEventListener('mousedown', this._mousedownHandler);
    this._mousemoveHandler = this._mousemoveHandler.bind(this);
    this._mouseupHandler = this._mouseupHandler.bind(this);
  }

  /**
   * A function responsible for moving the toolbar on the screen.
   * It detects whether the wrapper is the target of the mouse down event and if so it
   * adds other mouse events to handle the movement.
   */
  protected _mousedownHandler(e: MouseEvent): void {
    const node = e.composedPath()[0] as Element;
    if (!node.classList || !node.classList.contains('dt-toolbar-wrapper')) {
      return;
    }
    window.addEventListener('mousemove', this._mousemoveHandler);
    window.addEventListener('mouseup', this._mouseupHandler);
  }

  /**
   * When this is called then the toolbar is being dragged. It updates the toolbar position.
   */
  protected _mousemoveHandler(e: MouseEvent): void {
    const { movementX, movementY } = e;
    if (!movementX && !movementY) {
      return;
    }
    const box = this.getBoundingClientRect();
    if (movementX) {
      this.style.left = `${box.left + movementX}px`;
    }
    if (movementY) {
      this.style.top = `${box.top + movementY}px`;
    }
  }
  
  /**
   * When this is called then the toolbar is stopped being dragged. It removes mouse event listeners.
   */
  protected _mouseupHandler(): void {
    window.removeEventListener('mousemove', this._mousemoveHandler);
    window.removeEventListener('mouseup', this._mouseupHandler);
  }

  /**
   * Toggles a tool from the tools list click.
   */
  protected _toolClickHandler(e: Event): void {
    const node = this._findToolFromEvent(e);
    if (!node) {
      return;
    }
    const name = node.dataset.tool as string;
    if (this.selected === name) {
      this.selected = undefined;
    } else {
      this.selected = name;
    }
  }

  /**
   * Finds a reference to a LI element representing a tool.
   * @param e The originating event.
   * @returns The list element representing a tool.
   */
  protected _findToolFromEvent(e: Event): HTMLLIElement | undefined {
    const path = e.composedPath();
    for (let i = 0, len = path.length; i < len; i++) {
      const current = path[i] as Node;
      if (current.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }
      const element = current as HTMLElement;
      if (element.localName === 'aside') {
        // we cancel clicks from the inside of the aside of the list.
        return undefined;
      }
      if (element.dataset && element.dataset.tool) {
        return element as HTMLLIElement;
      }
    }
    return undefined;
  }

  /**
   * A handler for the "add layout" button click.
   * Creates a "default" layout and adds it to the layout list. 
   */
  protected _addLayoutHandler(): void {
    const info = defaultLayout('columns');
    this.layouts.push(info);
    this.requestUpdate();
  }

  /**
   * A handler for the edit layout button click. It selects the layout for editing.
   */
  protected _editLayoutHandler(e: Event): void {
    const button = e.currentTarget as HTMLButtonElement;
    const index = Number(button.dataset.index);
    if (Number.isNaN(index)) {
      return;
    }
    this.selectedLayout = index;
  }

  /**
   * An event handler to remove layout action button.
   */
  protected _deleteLayoutHandler(e: Event): void {
    const button = e.currentTarget as HTMLButtonElement;
    const index = Number(button.dataset.index);
    if (Number.isNaN(index)) {
      return;
    }
    this.layouts.splice(index, 1);
    this.requestUpdate();
  }

  protected _closeLayoutEditorHandler(): void {
    this.selectedLayout = undefined;
  }

  protected render(): TemplateResult {
    return html`
    <ol class="dt-toolbar-wrapper body-large" @click="${this._toolClickHandler}">
      ${this._layoutToolItemTemplate()}
    </ol>
    `;
  }

  protected _layoutToolItemTemplate(): TemplateResult {
    const { selected } = this;
    const isSelected = selected === 'layout';
    return html`
    <li 
      data-tool="layout"
      data-active="${isSelected}"
    >
      <span 
        class="icon-button toggle ${isSelected ? 'active' : ''}"
        aria-label="Layout Tool" 
        aria-description="Renders a column or grid layout" 
        title="Enables or disables the layout tool."
      >${Icons.layout}</span>
      ${this._layoutAsideTemplate()}
    </li>
    `;
  }

  protected _layoutAsideTemplate(): TemplateResult {
    const { selectedLayout } = this;
    const hasSelection = typeof selectedLayout === 'number';
    return html`
    <aside data-options="true" class="primary-container on-primary-container-text">
      ${hasSelection ? '' : this._layoutAsideTitleTemplate()}
      ${hasSelection ? this._layoutDetailsTemplate(selectedLayout as number) : this._layoutAsideListTemplate()}
    </aside>
    `;
  }

  protected _layoutAsideTitleTemplate(): TemplateResult {
    return html`
    <h2 class="headline-medium">
      <span>Layout</span>
    </h2>
    <p class="body-large">Renders columns and grids.</p>
    `;
  }

  protected _layoutAsideListTemplate(): TemplateResult {
    const { layouts=[] } = this;
    if (!Array.isArray(layouts)) {
      return html`<p>Invalid configuration.</p>`;
    }
    return html`
    <ol class="data-list">
      ${layouts.map((item, index) => this._layoutAsideListItemTemplate(item, index))}
    </ol>
    <div>
      <button class="tonal" @click="${this._addLayoutHandler}">Add</button>
    </div>
    `;
  }

  protected _layoutAsideListItemTemplate(item: ILayoutInfo, index: number): TemplateResult {
    return html`<li class="body-large">
      <span class="content">${item.name}</span>
      <button class="suffix icon-button toggle" title="Edit properties" data-index="${index}" @click="${this._editLayoutHandler}">${Icons.edit}</button>
      <button class="suffix icon-button toggle" title="Remove layout" data-index="${index}" @click="${this._deleteLayoutHandler}">${Icons.trash}</button>
    </li>`;
  }

  protected _layoutDetailsTemplate(selectedLayout: number): TemplateResult {
    const { layouts=[] } = this;
    const layout = layouts[selectedLayout];
    if (!layout) {
      return html`<p>Invalid configuration. This layout does not exist.</p>`;
    }
    return html`
    <div class="layout-editor">
      <div class="editor-header">
        <select>
          <option value="column">Columns</option>
          <option value="row">Rows</option>
          <option value="grid">Grid</option>
        </select>

        <button class="icon-button toggle" title="Close editor" @click="${this._closeLayoutEditorHandler}">${Icons.close}</button>
      </div>
    </div>
    `;
  }
}

import { css } from 'lit';

export default css`
button {
  pointer-events: all;
  position: relative;
}

button.tonal {
  appearance: none;
  border: none;
  border-radius: 24px;
  height: 40px;
  padding: 0 24px;
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  font-family: var(--md-sys-typescale-label-large-font-family-name);
  line-height: var(--md-sys-typescale-label-large-line-height);
  font-size: var(--md-sys-typescale-label-large-font-size);
  font-weight: var(--md-sys-typescale-label-large-font-weight);
}

button.tonal[disabled] {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  opacity: 0.38;
}

button.tonal:hover::before,
button.tonal:focus::before, 
button.tonal:active::before,
.icon-button:hover::before,
.icon-button:focus::before,
.icon-button:active::before {
  content: ' ';
  position: absolute;
  background-color: var(--md-sys-color-on-secondary-container);
  border-radius: inherit;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

button.tonal:hover::before,
.icon-button:hover::before {
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}

button.tonal:focus::before,
.icon-button:focus::before {
  opacity: var(--md-sys-state-focus-state-layer-opacity);
}

button.tonal:active::before,
.icon-button:active::before {
  opacity: var(--md-sys-state-pressed-state-layer-opacity);
}

.icon-button {
  min-width: 40px;
  min-height: 40px;
  appearance: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--md-sys-shape-corner-full);
  background-color: var(--md-sys-color-primary);
  fill: var(--md-sys-color-on-primary);
  position: relative;
  cursor: pointer;
}

.icon-button.toggle {
  background-color: var(--md-sys-color-surface-variant);
  fill: var(--md-sys-color-primary);
}

.icon-button.active {
  background-color: var(--md-sys-color-primary);
  fill: var(--md-sys-color-on-primary);
}
`;

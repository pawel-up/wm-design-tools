import { css } from 'lit';

export default css`
:host {
  display: block;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2.14748e+9;
  max-width: min-content;
  cursor: grab;
}

ol.dt-toolbar-wrapper {
  all: initial;
  cursor: inherit;
  /* font-size: 16px; */
  /* font-family: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif; */
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0px;
  border-radius: 2em;
  background-color: var(--md-sys-color-surface);
  box-shadow: var(--md-sys-elevation-1);
}

ol.dt-toolbar-wrapper:first-of-type {
  box-shadow: rgb(0 0 0 / 10%) 0px 0.25em 0.5em;
}

ol.dt-toolbar-wrapper:first-of-type {
  box-shadow: rgb(0 0 0 / 10%) 0px 0.25em 0.5em;
  backdrop-filter: blur(5px);
  background-color: var(--theme-bd-2);
}

.dt-toolbar-wrapper > li:first-child {
  margin-top: 0.25em;
}

.dt-toolbar-wrapper > li:last-child {
  margin-bottom: 0.25em;
}

.dt-toolbar-wrapper > li {
  height: 2.25em;
  width: 2.25em;
  margin: 0.05em 0.25em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
}

.dt-toolbar-wrapper li[data-active="true"] {
  background-color: var(--theme-bg);
}

.dt-toolbar-wrapper li[data-tool]:not([data-active="true"]):hover {
  cursor: pointer;
  background-color: var(--theme-icon_hover-bg);
}

.dt-toolbar-wrapper li[data-tool]:active,
.dt-toolbar-wrapper li[data-active="true"] {
  background-color: var(--theme-icon_active-bg);
}

.dt-toolbar-wrapper > li > aside {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  direction: ltr;
  text-align: left;
  left: 3em;
  top: 0px;
  z-index: -2;
  pointer-events: none;
  background-color: var(--md-sys-color-surface);
  box-shadow: var(--md-sys-elevation-1);
  border-radius: var(--md-sys-shape-corner-medium);
  transform: translateX(-1em);
  will-change: transform, opacity;
}

.dt-toolbar-wrapper > li[data-active="true"] > aside[data-options="true"] {
  opacity: 1;
  transform: translateX(0);
}

:host aside {
  transition: opacity 0.3s ease 0s, transform 0.2s ease 0s;
  cursor: default;
}

.dt-toolbar-wrapper > li > aside {
  padding: 1em;
  display: grid;
  gap: 1em;
  min-width: 256px;
}

.dt-toolbar-wrapper > li > aside > h2 {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
}

.dt-toolbar-wrapper > li > aside > :is(h2, p) {
  margin: 0px;
}

.data-list {
  all: initial;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0px;
}

.data-list > li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 52px;
}

.data-list > li .content {
  flex: 1;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.data-list > li .suffix {
  margin-left: 8px;
}

select {
  pointer-events: all;
  appearance: none;
  background-color: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
  line-height: 1;
  outline: 0;
  border-radius: var(--md-sys-shape-corner-medium);
  background-image: linear-gradient(var(--md-sys-color-surface-variant), var(--md-sys-color-surface-variant)),
    linear-gradient(-135deg, transparent 50%, var(--md-sys-color-surface-variant) 50%),
    linear-gradient(-225deg, transparent 50%, var(--md-sys-color-surface-variant) 50%),
    linear-gradient(var(--md-sys-color-surface-variant) 42%, var(--md-sys-color-on-surface-variant) 42%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 1px 100%, 20px 24px, 24px 32px, 20px 93%;
  background-position: right 20px center, right bottom, right bottom, right bottom;
  border: none;
  height: 40px;
  margin: 0;
  padding: 0px 24px 0px 12px;
  vertical-align: top;
}

select:hover {
  background-color: var(--md-ref-palette-neutral-variant80);
  background-image: linear-gradient(var(--md-ref-palette-neutral-variant80), var(--md-ref-palette-neutral-variant80)),
    linear-gradient(-135deg, transparent 50%, var(--md-ref-palette-neutral-variant80) 50%),
    linear-gradient(-225deg, transparent 50%, var(--md-ref-palette-neutral-variant80) 50%),
    linear-gradient(var(--md-ref-palette-neutral-variant80) 42%, var(--md-sys-color-on-surface-variant) 42%);
}

.editor-header {
  display: flex;
}

.editor-header .icon-button {
  margin-left: auto;
}
`;

import { svg, SVGTemplateResult } from 'lit';

/**
 * Wraps icon into an SVG container.
 * @param tpl Icon definition
 * @returns Complete SVG icon definition
 */
export const iconWrapper = (tpl: SVGTemplateResult, width = 24, height = 24): SVGTemplateResult => svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: ${width}px; height: ${height}px;">${tpl}</svg>`;
export type IconType = 'chevronRight' | 'close' | 'edit' | 'layout' | 'trash';

export const chevronRight = iconWrapper(svg`<path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/>`);
export const close = iconWrapper(svg`<path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>`);
export const edit = iconWrapper(svg`<path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z"/>`);
export const layout = iconWrapper(svg`<path d="M3 19V5h17.975v14Zm2-2h3.325V7H5Zm5.325 0h3.325V7h-3.325Zm5.325 0h3.325V7H15.65Z"/>`);
export const trash = iconWrapper(svg`<path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/>`);

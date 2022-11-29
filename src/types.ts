export interface ILayoutInfo {
  type: ILayoutType;
  name: string;
  config: IRowsLayout | IColumnsLayout | IGridLayout;
}

export type ILayoutType = 'columns' | 'rows' | 'grid';
export type IRowsLayoutType = 'top' | 'bottom' | 'center' | 'stretch';
export type IColumnsLayoutType = 'left' | 'right' | 'center' | 'stretch';

interface ILayoutConfig {
  /**
   * The hex color of the lines (column or rows)
   */
  color: string;
  /**
   * The opacity of the line color.
   */
  opacity: number;
}

interface ILinearLayout extends ILayoutConfig {
  /**
   * The number of lines in the layout.
   */
  count: number;
  /**
   * The columns / rows margins (left-right for columns, top-bottom for rows).
   * The margin is used in a reference to a `stretch` type.
   * The offset is used in a reference to other than `stretch` types.
   * The `center` type has no margin/offset.
   */
  margin?: number;
  /**
   * The size of the gutter (the gap between columns or rows).
   */
  gutter: number;
}

export interface IRowsLayout extends ILinearLayout {
  type: IRowsLayoutType;
  /**
   * The height of each row. 
   * This is not set for `stretch` type.
   */
  height?: number;
}

export interface IColumnsLayout extends ILinearLayout {
  type: IColumnsLayoutType;
  /**
   * The width of each column. 
   * This is not set for `stretch` type.
   */
  width?: number;
}

export interface IGridLayout extends ILayoutConfig {
  /**
   * The grid size.
   */
  size: number;
}

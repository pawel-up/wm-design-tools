import { IColumnsLayout, IGridLayout, ILayoutInfo, ILayoutType, IRowsLayout } from "../types.js";

type IScreenSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

function getScreenSize(): IScreenSize {
  const { innerWidth } = window;
  if (innerWidth >= 1440) {
    return 'XL';
  }
  if (innerWidth >= 1240 && innerWidth < 1440) {
    return 'L';
  }
  if (innerWidth >= 905 && innerWidth < 1240) {
    return 'M';
  }
  if (innerWidth >= 600 && innerWidth < 905) {
    return 'S';
  }
  return 'XS';
}

function defaultColumnLayout(): IColumnsLayout {
  const size = getScreenSize();
  const config: IColumnsLayout = {
    color: '#FF0000',
    opacity: 10,
    type: 'center',
    count: 0,
    gutter: 0,
    margin: 0,
  };
  if (size === 'XL') {
    config.count = 12;
    config.width = 72;
    config.gutter = 24;
  } else if (size === 'L') {
    config.type = 'stretch';
    config.count = 12;
    config.margin = 200;
    config.gutter = 24;
  } else if (size === 'M') {
    config.type = 'stretch';
    config.count = 12;
    config.margin = 24;
    config.gutter = 24;
  } else if (size === 'S') {
    config.type = 'stretch';
    config.count = 8;
    config.margin = 32;
    config.gutter = 16;
  } else {
    config.type = 'stretch';
    config.count = 4;
    config.margin = 16;
    config.gutter = 16;
  }
  return config;
}

function defaultRowLayout(): IRowsLayout {
  const config: IRowsLayout = {
    color: '#6200EE',
    opacity: 12,
    type: 'top',
    count: 1,
    gutter: 1,
    margin: 0,
    height: 56,
  };
  return config;
}

function defaultGridLayout(): IGridLayout {
  return {
    color: '#FF0000',
    opacity: 10,
    size: 8,
  };
}

export function nameLayout(type: ILayoutType, config: IRowsLayout | IColumnsLayout | IGridLayout): string {
  let name: string;
  if (type === 'columns') {
    const values = config as IColumnsLayout;
    name = `${values.count} columns `;
    if (values.width) {
      name += `(${values.width}px)`;
    } else {
      name += '(auto)';
    }
  } else if (type === 'rows') {
    const values = config as IRowsLayout;
    name = `${values.count} rows `;
    if (values.height) {
      name += `(${values.height}px)`;
    } else {
      name += '(auto)';
    }
  } else {
    const values = config as IGridLayout;
    name = `Grid ${values.size}px`;
  }
  return name;
}

export default function defaultLayout(type: ILayoutType): ILayoutInfo {
  let config: IRowsLayout | IColumnsLayout | IGridLayout;
  if (type === 'columns') {
    config = defaultColumnLayout();
  } else if (type === 'rows') {
    config = defaultRowLayout();
  } else {
    config = defaultGridLayout();
  }
  const name = nameLayout(type, config);
  const info: ILayoutInfo = {
    name,
    type,
    config,
  };
  return info;
}

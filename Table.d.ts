import * as React from 'react';

export interface TableProps extends React.Props<Table> {
  allRowsSelected?: boolean;
  bodyStyle?: React.CSSProperties;
  className?: string;
  fixedFooter?: boolean;
  fixedHeader?: boolean;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  height?: string;
  multiSelectable?: boolean;
  onCellClick?: (row: number, column: number) => void;
  onCellHover?: (row: number, column: number) => void;
  onCellHoverExit?: (row: number, column: number) => void;
  onRowHover?: (row: number) => void;
  onRowHoverExit?: (row: number) => void;
  onRowSelection?: (selectedRows: number[] | string) => void;
  selectable?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}
export class Table extends React.Component<TableProps, {}> {
}

export default Table;

export interface TableRowProps {
  // <tr/> is element that get the 'other' properties
  className?: string;
  displayBorder?: boolean;
  hoverable?: boolean;
  hovered?: boolean;
  onCellClick?: (e: React.MouseEvent<any>, row: number, column: number) => void;
  onCellHover?: (e: React.MouseEvent<any>, row: number, column: number) => void;
  onCellHoverExit?: (e: React.MouseEvent<any>, row: number, column: number) => void;
  onRowClick?: (e: React.MouseEvent<any>, row: number) => void;
  onTouchTap?: TouchTapEventHandler<any>;
  onRowHover?: (e: React.MouseEvent<any>, row: number) => void;
  onRowHoverExit?: (e: React.MouseEvent<any>, row: number) => void;
  rowNumber?: number;
  selectable?: boolean;
  selected?: boolean;
  striped?: boolean;
  style?: React.CSSProperties;
}
export class TableRow extends React.Component<TableRowProps, {}> {
}

export interface TableRowColumnProps {
  // <td/> is element that get the 'other' properties
  className?: string;
  columnNumber?: number;
  hoverable?: boolean;
  key?: string;
  onClick?: (e: React.MouseEvent<any>, column: number) => void;
  onHover?: (e: React.MouseEvent<any>, column: number) => void;
  onHoverExit?: (e: React.MouseEvent<any>, column: number) => void;
  style?: React.CSSProperties;

  // useful attributes passed to <td/>
  colSpan?: number;
}
export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
}

export interface TableHeaderProps {
  adjustForCheckbox?: boolean;
  className?: string;
  displaySelectAll?: boolean;
  enableSelectAll?: boolean;
  onSelectAll?: (checked: boolean) => void;
  selectAllSelected?: boolean;
  style?: React.CSSProperties;
}
export class TableHeader extends React.Component<TableHeaderProps, {}> {
}

export interface TableHeaderColumnProps {
  // <th/> is element that get the 'other' properties
  className?: string;
  columnNumber?: number;
  key?: string;
  onClick?: (e: React.MouseEvent<any>, column: number) => void;
  style?: React.CSSProperties;
  tooltip?: string;
  tooltipStyle?: React.CSSProperties;

  // useful attributes passed to <th/>
  colSpan?: number;
}
export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
}

export interface TableBodyProps {
  allRowsSelected?: boolean;
  className?: string;
  deselectOnClickaway?: boolean;
  displayRowCheckbox?: boolean;
  multiSelectable?: boolean;
  onCellClick?: (row: number, column: number) => void;
  onCellHover?: (row: number, column: number) => void;
  onCellHoverExit?: (row: number, column: number) => void;
  onRowHover?: (row: number) => void;
  onRowHoverExit?: (row: number) => void;
  onRowSelection?: (selectedRows: number[] | string) => void;
  preScanRows?: boolean;
  selectable?: boolean;
  showRowHover?: boolean;
  stripedRows?: boolean;
  style?: React.CSSProperties;
}
export class TableBody extends React.Component<TableBodyProps, {}> {
}

export interface TableFooterProps {
  // <tfoot/> is element that get the 'other' properties
  adjustForCheckbox?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export class TableFooter extends React.Component<TableFooterProps, {}> {
}

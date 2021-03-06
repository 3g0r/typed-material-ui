import * as React from 'react';
import {SharedEnhancedButtonProps} from "./internal/EnhancedButton";


export interface IconButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  className?: string;
  disabled?: boolean;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onKeyboardFocus?: (e: React.FocusEvent<any>, isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  style?: React.CSSProperties;
  tooltip?: React.ReactNode;
  tooltipPosition?: string;
  tooltipStyles?: React.CSSProperties;
  touch?: boolean;
}

export default class IconButton extends React.Component<IconButtonProps, {}> {
}

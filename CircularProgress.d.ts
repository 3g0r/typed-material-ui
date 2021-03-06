import * as React from 'react';

export interface CircularProgressProps {
  color?: string;
  innerStyle?: React.CSSProperties;
  max?: number;
  min?: number;
  mode?: 'determinate' | 'indeterminate';
  size?: number;
  style?: React.CSSProperties;
  thickness?: number;
  value?: number;
}

export default class CircularProgress extends React.Component<CircularProgressProps, {}> {
}

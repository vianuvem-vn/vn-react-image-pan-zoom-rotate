import * as React from 'react';
export interface IDragData {
    x: number;
    y: number;
    dx: number;
    dy: number;
}
export interface IReactPanZoomStateType {
    dragging: boolean;
    mouseDown: boolean;
    comesFromDragging: boolean;
    dragData: IDragData;
    matrixData: number[];
}
export interface IReactPanZoomProps {
    height?: string;
    width?: string;
    className?: string;
    enablePan?: boolean;
    reset?: () => void;
    zoom?: number;
    pandx?: number;
    pandy?: number;
    rotation?: number;
    onPan?: (x: number, y: number) => void;
    onReset?: (dx: number, dy: number, zoom: number) => void;
    onClick?: (e: React.MouseEvent<any>) => void;
    style?: {};
}
export default class ReactPanZoom extends React.PureComponent<IReactPanZoomProps, IReactPanZoomStateType> {
    static defaultProps: Partial<IReactPanZoomProps>;
    private panWrapper;
    private panContainer;
    private getInitialState;
    state: {
        comesFromDragging: boolean;
        dragData: {
            dx: number;
            dy: number;
            x: number;
            y: number;
        };
        dragging: boolean;
        matrixData: number[];
        mouseDown: boolean;
    };
    componentWillReceiveProps(nextProps: IReactPanZoomProps): void;
    reset: () => void;
    onClick: (e: React.MouseEvent<EventTarget>) => void;
    onTouchStart: (e: React.TouchEvent<EventTarget>) => void;
    onTouchEnd: (e: any) => void;
    onTouchMove: (e: React.TouchEvent<EventTarget>) => void;
    render(): JSX.Element;
    private onMouseDown;
    private panStart;
    private onMouseUp;
    private panEnd;
    private onMouseMove;
    private updateMousePosition;
    private getNewMatrixData;
}

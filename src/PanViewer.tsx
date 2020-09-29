import * as React from "react";
import ReactPanZoom from "./react-pan-zoom-rotate";
import styled, { css } from "styled-components";

const Container = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & img {
    width: 100%;
  }
`;
const ControlsContainer = styled.div`
  position: absolute;
  right: 10px;
  z-index: 2;
  top: 10px;
  user-select: none;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(53, 67, 93, 0.32);
  & div {
    text-align: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-bottom: 1px solid #ccc;
    & svg {
      height: 100%;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    &:last-child {
      border: none;
    }
    &:active {
      box-shadow: 0px 0px 5px 1px #0c0c0c;
    }
  }
`;

const StyledReactPanZoom = styled(ReactPanZoom)`
  ${Container};
`;

type PanViewerProps = {
  image: string;
  alt?: string;
};


const PanViewer = React.forwardRef(({ image, alt }: PanViewerProps, ref: any) => {
  const [dx, setDx] = React.useState(0);
  const [dy, setDy] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);

  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    if (zoom >= 1) {
      setZoom(zoom - 0.2);
    }
  };

  const rotateLeft = () => {
    if (rotation === -3) {
      setRotation(0);
    } else {
      setRotation(rotation - 1);
    }
  };

  const onPan = (dx: number, dy: number) => {
    setDx(dx);
    setDy(dy);
  };

  return (
    <>
      <ControlsContainer>
        <div onClick={zoomIn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 4L12 20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div onClick={zoomOut}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div onClick={rotateLeft} title="Girar imagem">
          <img alt="Girar imagem" width="24" height="24" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDguOTczLDE0Mi42ODlDMzY4LjExMywxMDEuODI5LDMxMy43ODUsNzkuMzI2LDI1Niw3OS4zMjZoLTMxLjcxN2w1MC45MDctNTEuMDMyTDI0Ni44MjYsMEwxNDcuNjgsOTkuMzg5DQoJCQlsOTcuODUyLDk5LjQ4OGwyOC41NjMtMjguMDkzbC01MC41NTEtNTEuMzk2SDI1NmM5Ny4xOTgsMCwxNzYuMjc1LDc5LjA3NiwxNzYuMjc1LDE3Ni4yNzVTMzUzLjE5OCw0NzEuOTM4LDI1Niw0NzEuOTM4DQoJCQlTNzkuNzI1LDM5Mi44NjEsNzkuNzI1LDI5NS42NTl2LTIwLjAzMWwtNDAuMDYyLDAuMDA0djIwLjAzMWMwLDU3Ljc4NiwyMi41MDMsMTEyLjExMyw2My4zNjQsMTUyLjk3Mw0KCQkJQzE0My44ODcsNDg5LjQ5NywxOTguMjE1LDUxMiwyNTYsNTEyYzU3Ljc4NSwwLDExMi4xMTMtMjIuNTAzLDE1Mi45NzMtNjMuMzY0YzQwLjg2MS00MC44NjEsNjMuMzY0LTk1LjE4OCw2My4zNjQtMTUyLjk3Mw0KCQkJUzQ0OS44MzQsMTgzLjU1LDQwOC45NzMsMTQyLjY4OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />        </div>
      </ControlsContainer>
      <StyledReactPanZoom
        zoom={zoom}
        pandx={dx}
        pandy={dy}
        onPan={onPan}
        rotation={rotation}
        key={dx}
      >
        <img
          style={{
            transform: `rotate(${rotation * 90}deg)`,
          }}
          src={image}
          alt={alt}
          ref={ref}
        />
      </StyledReactPanZoom>
    </>
  );
});

export default PanViewer;

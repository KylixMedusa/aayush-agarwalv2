/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { CSSProperties, memo } from "react";
import "./Button.scss";

interface Props {
  onClick?: () => void;
  text: string;
  style?: CSSProperties;
  url?: string;
}

const Button: React.FC<Props> = ({ text, onClick, style, url }) => (
  <a
    href={url || "#"}
    className="button nav-link"
    style={style}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }
    }}
  >
    <div className="bottom"></div>
    <div className="top">
      <div className="label">{text}</div>
      <div className="button-border button-border-left"></div>
      <div className="button-border button-border-top"></div>
      <div className="button-border button-border-right"></div>
      <div className="button-border button-border-bottom"></div>
    </div>
  </a>
);

export default memo(Button);

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from "react";
import "./Navbar.scss";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <header>
        <div className="logo__wrapper">
          <div className="logo__sugarloaf">
            <div className="shade" data-drift="-5 -10">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                <polygon
                  className="filled-poly"
                  points="137.6,67.7 38.5,193 236.8,193 "
                ></polygon>
              </svg>
            </div>
            <div className="logo">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                <polygon
                  className="stroke-poly"
                  points="105.2,79.7 28.2,177 182.2,177 "
                ></polygon>
                <polygon
                  className="stroke-poly"
                  points="127.6,51.7 28.5,177 226.8,177 "
                ></polygon>
              </svg>
            </div>
          </div>
          <div
            className={`logo--textContainer ${isMenuOpen ? "open" : "close"}`}
          >
            <div className="spanWrapper">
              <span onClick={() => setMenuOpen(false)}>Close</span>
              <span onClick={() => setMenuOpen(true)}>Menu</span>
            </div>
          </div>
        </div>
        <div className="logo__wrapper right">
          <div className="logo__sugarloaf">
            <div className="shade" data-drift="-5 -10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <path
                  className="stroke-path"
                  d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"
                ></path>
              </svg>
            </div>
            <div className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <path
                  className="stroke-path"
                  d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={`logo--textContainer`}>
            <div className="spanWrapper">
              <span>Hire Me</span>
            </div>
          </div>
        </div>
      </header>
      <menu className={`navbar__menu ${isMenuOpen ? "open" : "close"}`}></menu>
    </div>
  );
};

export default memo(Navbar);

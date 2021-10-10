/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <header>
        <div className="logo__wrapper">
          <Link to="/">
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
          </Link>
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
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </header>
      <menu className={`navbar__menu ${isMenuOpen ? "open" : "close"}`}>
        <div>
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://github.com/KylixMedusa"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aayush-agarwal-214b5a17b/"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-linkedin"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Aayush-Agarwal/100004764855806"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    clip-rule="evenodd"
                    viewBox="0 0 24 24"
                  >
                    <title>Facebook</title>
                    <g transform="translate(-40 -40)">
                      <rect width="24" height="24" x="40" y="40" fill="none" />
                      <path
                        fill="currentColor"
                        d="M9.1,9.1L9.1,7C9.1,3.763 11.763,1.1 15,1.1L18,1.1C18.497,1.1 18.9,1.503 18.9,2L18.9,6C18.9,6.497 18.497,6.9 18,6.9C18,6.9 15,6.9 15,6.9C14.945,6.9 14.9,6.945 14.9,7L14.9,9.1L18,9.1C18.277,9.1 18.539,9.228 18.709,9.446C18.88,9.665 18.94,9.949 18.873,10.218L17.873,14.218C17.773,14.619 17.413,14.9 17,14.9L14.9,14.9L14.9,22C14.9,22.497 14.497,22.9 14,22.9L10,22.9C9.503,22.9 9.1,22.497 9.1,22L9.1,14.9L7,14.9C6.503,14.9 6.1,14.497 6.1,14L6.1,10C6.1,9.503 6.503,9.1 7,9.1L9.1,9.1ZM17.1,2.9L15,2.9C12.751,2.9 10.9,4.751 10.9,7L10.9,10C10.9,10.497 10.497,10.9 10,10.9L7.9,10.9L7.9,13.1L10,13.1C10.497,13.1 10.9,13.503 10.9,14L10.9,21.1L13.1,21.1L13.1,14C13.1,13.503 13.503,13.1 14,13.1L16.297,13.1L16.847,10.9L14,10.9C13.503,10.9 13.1,10.497 13.1,10C13.1,10 13.1,7 13.1,7C13.1,5.958 13.958,5.1 15,5.1L17.1,5.1L17.1,2.9Z"
                        transform="translate(40 40)"
                      />
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.behance.net/KylixMedusa"
                  aria-label="Behance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Behance</title>
                    <path d="M22.1084,15.03169a.99748.99748,0,0,0-1.21582.72265,2.99839,2.99839,0,0,1-5.90088-.7539v-1h7a.99974.99974,0,0,0,1-1,5,5,0,1,0-10,0v2a4.99837,4.99837,0,0,0,9.83935,1.24609A.999.999,0,0,0,22.1084,15.03169Zm-4.1167-5.03125a3.01119,3.01119,0,0,1,2.11816.87207,3.04438,3.04438,0,0,1,.69867,1.12793H15.176A2.99509,2.99509,0,0,1,17.9917,10.00044Zm-2-3h4a1,1,0,0,0,0-2h-4a1,1,0,0,0,0,2Zm-6.082,4.71716a3.98653,3.98653,0,0,0-2.918-6.71716h-5a.99973.99973,0,0,0-1,1v13a.99974.99974,0,0,0,1,1h5.5a4.492,4.492,0,0,0,2.418-8.28284ZM2.9917,7.00044h4a2,2,0,1,1,0,4h-4Zm4.5,11h-4.5v-5h4.5a2.5,2.5,0,0,1,0,5Z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/KylixMedusa"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram"
                  >
                    <title>Instagram</title>
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__menu--item">
            <h1>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Home
              </Link>
            </h1>
            <p>Back to home page.</p>
          </div>
          <div className="navbar__menu--item">
            <h1>
              <Link
                to="/resume"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Resume
              </Link>
            </h1>
            <p>My education, experiences and others.</p>
          </div>
          <div className="navbar__menu--item">
            <h1>
              <Link
                to="/portfolio"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Portfolio
              </Link>
            </h1>
            <p>My works in field of development.</p>
          </div>
          <div className="navbar__menu--item">
            <h1>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </h1>
            <p>Reach out to me.</p>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default memo(Navbar);

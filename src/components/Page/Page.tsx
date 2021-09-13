import React, { useEffect, useState } from "react";
import { getSpannedTitle } from "../../utils";
import "./Page.scss";

const Home: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 500);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div className="pageWrap">
      <div className={`loader__wrapper ${loading ? "open" : "close"}`}>
        <div className="loader">
          <h1>{getSpannedTitle("welcome.")}</h1>
          <div className="ball"></div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Home;

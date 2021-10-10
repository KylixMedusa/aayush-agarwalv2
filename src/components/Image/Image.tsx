/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect, useState } from "react";
import "./Image.scss";

interface Props {
  src: string;
  alt?: string;
  aspectRatio?: string;
}

const Image: React.FC<Props> = ({ src, alt = "", aspectRatio = "" }) => {
  const domRef = React.useRef<HTMLDivElement>(null);

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ref = domRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);
  return (
    <div
      ref={domRef}
      className={`image__container ${aspectRatio} ${
        isIntersecting ? " is-visible" : "is-not-visible"
      }`}
    >
      <div className="image__wrapper">
        <img src={src} alt={alt} decoding="async" />
      </div>
    </div>
  );
};

export default memo(Image);

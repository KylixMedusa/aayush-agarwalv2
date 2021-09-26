/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import "./Image.scss";

interface Props {
  src: string;
  alt?: string;
}

const Image: React.FC<Props> = ({ src, alt = "" }) => (
  <div className="image__container">
    <div className="image__wrapper">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default memo(Image);

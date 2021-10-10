/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import "./Image.scss";

interface Props {}

const Map: React.FC<Props> = () => (
  <div
    className="image__container"
    style={{ aspectRatio: "auto", height: "100%" }}
  >
    <div className="map__info">West Bengal, India</div>
    <div className="image__wrapper" style={{ height: "100%" }}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4130.883714505203!2d88.82473814579852!3d26.57764470128218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e387b49655a5f5%3A0x10b84931dc376124!2zMjbCsDM0JzI5LjMiTiA4OMKwNDknMjkuOSJF!5e0!3m2!1sen!2sin!4v1596124387479!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen={false}
        tabIndex={0}
      ></iframe>
    </div>
  </div>
);

export default memo(Map);

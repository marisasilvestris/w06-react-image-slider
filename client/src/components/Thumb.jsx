import { useState } from "react";
import prettyLog from "../prettyLog";
import SingleView from "./SingleView";

export default function Image({
  id,
  src,
  alt,
  className,
  imgIndex,
  setImgIndex,
  singleVisible,
  setSingleVisible,
}) {
  function imageClick() {
    prettyLog(`moving from image #${imgIndex} to image #${id}`);
    setSingleVisible(true);
    setImgIndex(id);
  }
  return (
    <>
      <img
        key={id}
        className={className}
        src={src}
        alt={alt}
        onClick={() => {
          imageClick();
        }}
        onFocus={() => {
          prettyLog("focused!");
        }}
      />
    </>
  );
}

import { useState } from "react";
import prettyLog from "../prettyLog";
import SingleView from "./SingleView";

export default function Image({
  image,
  className,
  onClick,
  onMouseOver,
  setImgIndex,
}) {
  function keyFilter(e) {
    if (e.key == "Enter" || e.key == " ") {
      setImgIndex(image.id);
    }
  }
  return (
    <>
      <img
        key={image.id}
        className={className}
        src={image.src}
        alt={image.alt}
        onClick={onClick}
        onKeyDown={(e) => {
          keyFilter(e);
        }}
        tabIndex={1}
        onMouseOver={onMouseOver}
      />
    </>
  );
}

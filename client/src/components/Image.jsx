import { useState } from "react";
import prettyLog from "../prettyLog";
import SingleView from "./SingleView";

export default function Image({ id, src, alt, className, onClick }) {
  return (
    <>
      <img
        key={id}
        className={className}
        src={src}
        alt={alt}
        onClick={onClick}
        onFocus={() => {
          prettyLog("focused!");
        }}
      />
    </>
  );
}

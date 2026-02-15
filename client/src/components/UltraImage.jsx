import { useState } from "react";
import prettyLog from "../prettyLog";

export default function UltraImage({
  id,
  src,
  alt,
  className,
  imgIndex,
  setImgIndex,
}) {
  const [visible, setVisible] = useState(false);
  function imageClick() {
    prettyLog(`moving from image #${imgIndex} to image #${id}`);
    setVisible(!visible);
    prettyLog(id);
    setImgIndex(id);
  }
  return (
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
  );
}

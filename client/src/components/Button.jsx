import prettyLog from "../prettyLog";

export default function Button({
  href,
  text,
  imgIndex,
  setImgIndex,
  imgLength,
  dir,
  className,
}) {
  function setImg() {
    if (dir == "left") {
      if (imgIndex === 0) {
        prettyLog(`left clicked, past position 0 ${imgIndex}`);
        setImgIndex(imgLength - 1);
      } else {
        prettyLog(`left clicked, unequal to length ${imgIndex}`);
        setImgIndex(imgIndex - 1);
      }
    } else if (dir == "right") {
      if (imgIndex === imgLength - 1) {
        prettyLog(`right clicked, past position ${imgLength}`);
        setImgIndex(0);
        {
          /* weird that this doesn't update in time? */
        }
      } else {
        prettyLog(`right clicked, unequal to length ${imgIndex}`);
        setImgIndex(imgIndex + 1);
      }
    }
  }
  return (
    <button href={href} onClick={setImg} className={className}>
      {text}
    </button>
  );
}

import prettyLog from "../prettyLog";

export default function Button({
  href,
  text,
  imgIndex,
  setImgIndex,
  imgLength,
  dir,
  onClick,
  className,
}) {
  return (
    <button href={href} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

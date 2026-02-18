export default function Button({ href, text, onClick, className }) {
  return (
    <button href={href} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

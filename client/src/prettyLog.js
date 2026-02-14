export default function prettyLog(msg) {
  const logStyle = `background-image:linear-gradient( lightblue, pink, white, pink, lightblue);color:black;padding:4px;font-weight:bold; margin:0;border-radius:5px;`;
  console.log(`%c${msg}`, logStyle);
}

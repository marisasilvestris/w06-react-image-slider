export default function konamiCode(keySequence, fireEvent) {
  // const keySequence = [
  //   "ArrowUp",
  //   "ArrowUp",
  //   "ArrowDown",
  //   "ArrowDown",
  //   "ArrowLeft",
  //   "ArrowRight",
  //   "ArrowLeft",
  //   "ArrowRight",
  //   "b",
  //   "a",
  // ];
  let y = 0;
  document.addEventListener(`keydown`, (keypress) => {
    if (keypress.key === keySequence[y] && y < keySequence.length) {
      y++;
      if (y == keySequence.length) {
        fireEvent();
      }
    } else {
      y = 0;
    }
  });
}

// keySequence can easily be edited with the aid of https://keyjs.dev/
// Import this file and call konamiCode([keySequence], {callBack}), with the function to execute when input is successful.
// loosely adapted from the real Konami Code in Contra, courtesy of Displaced Gamers' codewalk - https://youtu.be/8LnwsYL7Apk?si=34dtXQ9eJZf2uLgu&t=379

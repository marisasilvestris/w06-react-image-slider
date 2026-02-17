import { useState, useEffect } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import prettyLog from "./prettyLog";
import Header from "./components/Header";
import MegaGallery from "./components/MegaGallery";
import UltraGallery from "./components/UltraGallery";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Button from "./components/Button";
import konamiCode from "./konami";

function App() {
  const [secret, setSecret] = useState(0);
  // [
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
  useEffect(() => {
    function triggeredEvent() {
      if (secret >= 1) {
        setSecret(0);
      } else {
        setSecret(secret + 1);
      }
      prettyLog(`secret is ${secret}`);
    }
    konamiCode(
      [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
      ],
      triggeredEvent,
    );
    return () => {
      removeEventListener("keydown", triggeredEvent);
    };
  }, [secret]);

  return (
    <>
      <Header />
      <main className="h-full w-full">
        {/* <Button href="test" text="helo btton" /> */}
        {/* old boolean toggle */}
        {/* {secret === true ? (
          <MegaGallery url="http://localhost:9001/robitlist" />
        ) : (
          <Gallery url="http://localhost:9001/imagelist" />
        )} */}
        {(() => {
          switch (secret) {
            case 1:
              return <MegaGallery url="http://localhost:9001/robitlist" />;
            // case 2:
            //   return <UltraGallery url="http://localhost:9001/ultralist" />;
            default:
              return <Gallery url="http://localhost:9001/imagelist" />;
          }
        })()}
      </main>
      <Footer />
    </>
  );
}

export default App;

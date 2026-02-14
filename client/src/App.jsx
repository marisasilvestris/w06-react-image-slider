import { useState, useEffect } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import prettyLog from "./prettyLog";
import Header from "./components/Header";
import MegaGallery from "./components/MegaGallery";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Button from "./components/Button";
import konamiCode from "./konami";

function App() {
  const [secret, setSecret] = useState(false);
  konamiCode(() => {
    setSecret(!secret);
    prettyLog(`test`);
  });

  return (
    <>
      <Header />
      <main className="">
        {/* <Button href="test" text="helo btton" /> */}
        {secret === true ? (
          <MegaGallery url="http://localhost:9001/robitlist" />
        ) : (
          <Gallery url="http://localhost:9001/imagelist" />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import prettyLog from "../prettyLog";
import Button from "./Button";
import Image from "./Image";
import SingleView from "./SingleView";

export default function Gallery({ url }) {
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgLength, setImgLength] = useState(0);

  useEffect(() => {
    async function fetchImgs(url) {
      const res = await fetch(url);
      const data = await res.json();
      setImages(data);
      setImgLength(data.length);
    }
    fetchImgs(url);
  }, [url]);

  // legit do not have the time to find out what this error means but it seems to work anyway. small graces.
  function leftBtn() {
    if (imgIndex === 0) {
      setImgIndex(imgLength - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }

  function rightBtn() {
    if (imgIndex === imgLength - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }

  useEffect(() => {
    function arrowPress(e) {
      if (e.key == "ArrowLeft") {
        leftBtn();
      } else if (e.key == "ArrowRight") {
        rightBtn();
      }
      prettyLog(e.key);
    }
    window.addEventListener(`keydown`, arrowPress);
    return () => window.removeEventListener("keydown", arrowPress);
  }, [imgLength, imgIndex, leftBtn, rightBtn]);

  const [singleVisible, setSingleVisible] = useState(false);

  return (
    <>
      <SingleView
        singleVisible={singleVisible}
        setSingleVisible={setSingleVisible}
        image={images[imgIndex]}
        imgIndex={imgIndex}
        className="singleview gallery fixed left-0 top-0 w-screen h-screen flex overflow-hidden z-999"
      />
      <div className="gallery flex flex-col h-screen w-screen">
        {/* /* single container */}
        <div className="imgContainer grow relative flex place-self-center">
          {imgLength > 0 ? (
            <>
              <Image
                image={images[imgIndex]}
                onClick={() => {
                  setSingleVisible(!singleVisible);
                }}
                className="object-cover"
              />
              <p>{images[imgIndex].desc}</p>
            </>
          ) : null}
        </div>

        {/* left/right buttons */}
        <Button
          href={null}
          text="<"
          onClick={leftBtn}
          className="absolute left-0 top-1/2"
        />
        <Button
          href={null}
          text=">"
          onClick={rightBtn}
          className="absolute right-0 top-1/2"
        />
        {/* thumbnails */}
        <div className="thumbnailContainer flex flex-row overflow-x-auto h-32 max-w-screen rounded-2xl bg-emerald-200">
          {imgLength > 0
            ? images.map((image) => {
                return (
                  <div key={image.id} className="thumbnail p-2">
                    <Image
                      image={image}
                      onClick={() => {
                        setImgIndex(image.id);
                      }}
                      className="h-full max-w-max rounded-xl"
                      setImgIndex={setImgIndex}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

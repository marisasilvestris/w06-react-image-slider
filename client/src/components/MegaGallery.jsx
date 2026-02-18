import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import prettyLog from "../prettyLog";
import Button from "./Button";
import Image from "./Image";
import SingleView from "./SingleView";

export default function MegaGallery({ url }) {
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

  useEffect(() => {
    function arrowPress(e) {
      if (e.key == "ArrowLeft") {
        if (imgIndex === 0) {
          setImgIndex(imgLength - 1);
        } else {
          setImgIndex(imgIndex - 1);
        }
      } else if (e.key == "ArrowRight") {
        if (imgIndex === imgLength - 1) {
          setImgIndex(0);
        } else {
          setImgIndex(imgIndex + 1);
        }
      }
      prettyLog(e.key);
    }
    window.addEventListener(`keydown`, arrowPress);
    return () => window.removeEventListener("keydown", arrowPress);
  }, [imgLength, imgIndex]);

  const [singleVisible, setSingleVisible] = useState(false);

  return (
    <>
      <SingleView
        singleVisible={singleVisible}
        setSingleVisible={setSingleVisible}
        image={images[imgIndex]}
        imgIndex={imgIndex}
        onClick={() => {
          setSingleVisible(!singleVisible);
        }}
        className="singleview bg-blue-500 fixed left-0 top-0 w-screen h-screen flex overflow-hidden z-999"
      />
      {/* <audio autoPlay>
        <source src="./src/audio/03-stage-select.mp3" type="audio/mpeg" />
        pls enable audio support (:
      </audio> */}

      <div className="megaman place-items-center min-w-screen min-h-screen">
        {/* thumbnails */}
        <div className="gridContainer grid grid-cols-3 grid-rows-3 max-w-300 max-h-300">
          {imgLength > 0
            ? images.map((image) => {
                const text = image.title.split(" ");
                return (
                  <div key={image.id} className="thumbnail relative p-8">
                    <div className="imgContainer relative">
                      <Image
                        image={image}
                        onClick={() => {
                          setImgIndex(image.id);
                          setSingleVisible(true);
                        }}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-3xl uppercase flex w-full flex-row flex-wrap place-content-between">
                      <h3 className="text-start w-full text-white">
                        {text[0]}
                      </h3>
                      {text[1] ? (
                        <h3 className="text-end w-full text-white">
                          {text[1]}
                        </h3>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

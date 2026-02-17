import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
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
        images={images}
        imgIndex={imgIndex}
      />
      <div className="gallery sliderContainer h-screen">
        {/* /* single container */}
        <div className="imgContainer">
          {imgLength > 0 ? (
            <>
              <Image
                src={images[imgIndex].src}
                alt={images[imgIndex].alt}
                onClick={() => {
                  setSingleVisible(!singleVisible);
                }}
              />
            </>
          ) : null}
        </div>

        {/* thumbnails */}
        <div className="thumbnailContainer flex flex-row place-self-center absolute bottom-0">
          {imgLength > 0
            ? images.map((image) => {
                return (
                  <div key={image.id} className="thumbnail">
                    <div className="imgContainer">
                      <Image
                        src={image.thumb}
                        alt={image.alt}
                        id={image.id}
                        onClick={() => {
                          setImgIndex(image.id);
                        }}
                      />
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        {/* left/right buttons */}
        <Button
          href={null}
          text="<"
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          imgLength={imgLength}
          dir="left"
          onClick={leftBtn}
          className="absolute left-0 top-1/2"
        />
        <Button
          href={null}
          text=">"
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          imgLength={imgLength}
          dir="right"
          onClick={rightBtn}
          className="absolute right-0 top-1/2"
        />
      </div>
    </>
  );
}

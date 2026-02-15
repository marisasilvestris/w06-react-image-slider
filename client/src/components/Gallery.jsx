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
    async function fetchImgs() {
      const res = await fetch(url);
      const data = await res.json();
      setImages(data);
      setImgLength(data.length);
    }
    fetchImgs();
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

  return (
    <>
      <SingleView />
      <div className="sliderContainer overflow-hidden content-center">
        {/* multi container */}
        {/* <div className="imageContainer w-screen h-auto flex overflow-auto">
        {imgLength > 0
          ? images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              );
            })
          : ""}
      </div> */}
        {/* /* single container */}
        <div className="imgContainer">
          {imgLength > 0 ? (
            <Image
              src={images[imgIndex].src}
              alt="foo"
              className="aspect-square w-full"
              imgIndex={imgIndex}
              setImgIndex={setImgIndex}
              id={0}
            />
          ) : (
            ""
          )}
        </div>

        {/* thumbnails */}
        <div className="thumbnailContainer flex flex-row place-self-center absolute bottom-0">
          {imgLength > 0
            ? images.map((image, index) => {
                return (
                  <div key={index} className="thumbnail aspect-square">
                    <div className="imgContainer object-contain">
                      <Image
                        src={image.thumb}
                        alt={image.alt}
                        id={image.id}
                        imgIndex={imgIndex}
                        className="h-auto w-auto"
                        setImgIndex={setImgIndex}
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
          className="absolute left-0 top-1/2"
        />
        <Button
          href={null}
          text=">"
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          imgLength={imgLength}
          dir="right"
          className="absolute right-0 top-1/2"
        />
      </div>
    </>
  );
}

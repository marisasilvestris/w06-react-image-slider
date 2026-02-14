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
  }, [url, images]);
  return (
    <>
      <SingleView />
      <div className="sliderContainer relative content-center">
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
              className="object-cover w-full h-full"
            />
          ) : (
            ""
          )}
        </div>

        {/* thumbnails */}
        <div className="thumbnailContainer flex flex-row overflow-auto place-self-center absolute bottom-0">
          {imgLength > 0
            ? images.map((image, index) => {
                return (
                  <div className=" place-self-center">
                    <div className="imgContainer">
                      <Image
                        key={index}
                        src={image.thumb}
                        alt={image.alt}
                        id={image.id}
                        imgIndex={imgIndex}
                        className="place-self-center"
                        setImgIndex={setImgIndex}
                      />
                    </div>
                    <div className="text-3xl uppercase">
                      <h3 className="">{image.alt}</h3>
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

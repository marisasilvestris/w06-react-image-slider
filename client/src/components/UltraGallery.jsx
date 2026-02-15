import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import prettyLog from "../prettyLog";
import Button from "./Button";
import UltraImage from "./UltraImage";
import SingleView from "./SingleView";

export default function UltraGallery({ url }) {
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
  return (
    <>
      <SingleView />
      <div className="sliderContainer relative place-self-center">
        {/* grid */}
        <div className="thumbnailContainer flex flex-row overflow-hidden w-full h-full place-self-center ">
          {imgLength > 0
            ? images.map((image, index) => {
                const text = image.title.split(" ");
                return (
                  <div className="robit place-self-center h-full p-4">
                    <div className="imgContainer w-64">
                      <UltraImage
                        key={index}
                        src="./src/img/images/bony-steve.webp"
                        alt={image.alt}
                        id={image.id}
                        imgIndex={imgIndex}
                        className="w-full h-full place-self-center"
                        setImgIndex={setImgIndex}
                      />
                    </div>
                    <div className="text-3xl uppercase flex w-full flex-row flex-wrap place-content-between">
                      <h3 className="text-start w-full text-white">
                        {text[0]}
                      </h3>
                      <h3 className="text-end w-full text-white">{text[1]}</h3>
                    </div>
                  </div>
                );
              })
            : "<div class='error'>error on import!</div>"}
        </div>

        {/* left/right buttons */}
        {/* <Button
          href={null}
          text="left"
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          imgLength={imgLength}
          dir="left"
          className="absolute left-0 align-middle"
        /> */}
        {/* <Button
        href={null}
        text="right"
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        imgLength={imgLength}
        dir="right"
        className=""
      /> */}
      </div>
    </>
  );
}

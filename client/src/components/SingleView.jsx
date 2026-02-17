import prettyLog from "../prettyLog";
import Button from "./Button";
import { useState } from "react";
import Image from "./Image";

export default function SingleView({
  id,
  className,
  imgIndex,
  singleVisible,
  setSingleVisible,
  images,
}) {
  return (
    <>
      {singleVisible ? (
        <div
          className="singleview bg-amber-400 fixed left-0 top-0 w-screen h-screen z-999 mr-auto ml-auto"
          onClick={() => {
            setSingleVisible(!singleVisible);
          }}
        >
          <Image src={images[imgIndex].src} className="self-center" />
          <p>test</p>
          {/* <Button
            href={null}
            text="X"
            className={"absolute top-3 right-3"}
            onClick={buttonClick}
          /> */}
        </div>
      ) : null}
    </>
  );
}

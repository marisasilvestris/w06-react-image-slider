import prettyLog from "../prettyLog";
import Button from "./Button";
import { useState } from "react";
import Image from "./Image";

export default function SingleView({
  className,
  imgIndex,
  singleVisible,
  setSingleVisible,
  image,
}) {
  return (
    <>
      {singleVisible ? (
        <div className={className}>
          <div
            className="basis-1/2"
            onClick={() => {
              setSingleVisible(!singleVisible);
            }}
          >
            <Image image={image} className="p-16 w-full" />
            <p>{image.alt}</p>
          </div>
          <div className="basis-1/2 p-16">
            <h2 className="text-4xl">{image.title}</h2>
            <p>{image.desc}</p>
          </div>
          <Button
            href={null}
            text="X"
            className={"absolute top-3 right-3"}
            onClick={() => {
              setSingleVisible(!singleVisible);
            }}
          />
        </div>
      ) : null}
    </>
  );
}

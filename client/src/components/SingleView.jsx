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
            <Image
              image={image}
              className="py-16 px-8 w-full max-h-200 object-cover"
            />
            <p className="px-8">{image.alt}</p>
          </div>
          <div className="basis-1/2 py-16 px-8">
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

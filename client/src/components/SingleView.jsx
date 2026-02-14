import Button from "./Button";
import { useState } from "react";

export default function SingleView({
  id,
  src,
  alt,
  className,
  imgIndex,
  setImgIndex,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible == true ? (
        <div className="singleview absolute left-0 top-0 w-screen h-screen bg-amber-200 hidden">
          <Button
            href={null}
            text="X"
            visible={visible}
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
      ) : null}
    </>

    // <div className="singleview absolute left-0 top-0 w-screen h-screen bg-amber-200 hidden">
    //   <Button
    //     href={null}
    //     text="X"
    //     visible={visible}
    //     onClick={() => {
    //       setVisible(!visible);
    //     }}
    //   />
    // </div>
  );
}

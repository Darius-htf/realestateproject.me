import React, { useEffect, useState } from "react";
import ImgSkeleton from "../ImgSkeleton/ImgSkeleton";

function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <div className="IMAGEWITHSKELETON h-full w-full">
      {loaded ? (
        <img className="object-cover" src={src} alt={alt} />
      ) : (
        <ImgSkeleton />
      )}
    </div>
  );
}

export default ImageWithSkeleton;

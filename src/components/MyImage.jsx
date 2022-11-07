import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MyImage(image) {
  return (
    <div>
      <LazyLoadImage
        className="object-cover"
        height={image.height}
        src={image.src}
        width={image.width}
      />
    </div>
  );
}

export default MyImage;

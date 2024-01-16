import { useEffect, useState } from 'react';

function ProductGallery(images, isOnSale) {
  const [bigImage, setBigImage] = useState(images.images[0]);

  useEffect(
    function () {
      setBigImage(images.images[0]);
    },
    [setBigImage, images.images],
  );

  function handleSetBigImage(image) {
    setBigImage(image);
  }
  return (
    <div className="flex flex-col gap-4">
      <img
        src={bigImage}
        alt=""
        className={` ${
          isOnSale
            ? "before:absolute before:left-5 before:top-10 before:z-50 before:rounded-xl before:bg-black before:px-3 before:py-1  before:text-sm before:text-white before:content-['SALE']"
            : ''
        }`}
      />
      <div className={`grid grid-cols-3 gap-3 overflow-hidden `}>
        {images.images.map((img, idx) => (
          <img
            src={img}
            key={idx}
            alt={`Product ${idx}`}
            className=" cursor-pointer object-cover object-center"
            onClick={() => handleSetBigImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;

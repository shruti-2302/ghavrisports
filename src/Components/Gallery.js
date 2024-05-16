import React from "react";

const Gallery = () => {
  return (
    <div>
      {" "}
      <div className="max-w-xl mx-auto text-center py-10">
        <h3 className="text-white text-3xl font-semibold sm:text-4xl">
          Our Gallery
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 px-32" id="gallery">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_0419.JPG"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="img\IMG_0421.JPG"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_0422.JPG"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_1324.JPG"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_0755.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="img\IMG_0783.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_0785.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="img\IMG_0794.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_1528.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_1601.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_1768.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="img\IMG_1871.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

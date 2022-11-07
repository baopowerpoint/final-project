import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Carousel = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, type: "linear", duration: 2 }}
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark  relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative w-full ">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/production%20Collection%2F62928eb18bff4fa116ee.jpg?alt=media&token=45c61412-34a0-4972-9f51-3e86be6c092b"
              className="block w-full h-96 object-cover"
              alt="Product"
            />
          </div>

          <div className="carousel-item relative float-left w-full ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/production%20Collection%2F3cb77014805b44051d4a%20(1).jpg?alt=media&token=3d37c69c-e5f0-4af4-b6cc-593088f57cb6"
              className="block w-full h-96 object-cover"
              alt="Product"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/production%20Collection%2Fc9da77abbee47aba23f5%20(1).jpg?alt=media&token=887a3e93-2209-4e00-b728-9a661c60a58e"
              className="block w-full  h-96 object-cover"
              alt="Product"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev bg-light bg-opacity-40 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-light bg-opacity-40 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </motion.div>
    </>
  );
};

export default Carousel;

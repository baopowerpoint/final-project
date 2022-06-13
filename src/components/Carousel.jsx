import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div
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

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/272443168_3066786800230880_4768292249261769721_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=r9nucsrbaKMAX-o1yDY&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8BQ30F2S2ERoh8Nmf3L40TSJ4RQ06eVgswwvpPxSlWCw&oe=62AA3A73"
              className="block w-full h-96 object-cover object-center"
              alt="Motorbike Smoke"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/272152197_3064681180441442_7853510780194952066_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=kqOxrDC9LzkAX_TrSl0&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9-hKO2eUyR9DmslCnljYfgO0qTtEI_VCk329UCER9yEA&oe=62AB103D"
              className="block w-full h-96 object-cover"
              alt="Mountaintop"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/272159186_3066060800303480_7406043557994079953_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=yWOSw3XBn-sAX8oZSZJ&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-7IZUf3r72U0aaZDp4LPpOw88hO3wBMlYNVlhAJuHIGw&oe=62A9E7AE"
              className="block w-full  h-96 object-cover"
              alt="Woman Reading a Book"
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
      </div>
      <Link to="products">
        <button
          to="products"
          className="bg-dark text-light font-400 px-5 py-1 rounded-sm block mx-auto my-5"
        >
          Xem Sản Phẩm
        </button>
      </Link>
    </>
  );
};

export default Carousel;

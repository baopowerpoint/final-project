import React from "react";
import { SiZalo } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Qrcode from "../imgs/qrcode.png";
import { useState } from "react";

const Footer = () => {
  const [isHide, setIsHide] = useState(true);
  const handleToggle = () => {
    setIsHide(!isHide);
  };
  return (
    <footer className="text-center mt-10 lg:text-left  mx-auto bg-light text-gray-600">
      <div className="border-b  border-dark3">
        <div className="flex justify-center items-center max-w-[600px] mx-auto gap-10 py-6 ">
          <div className="mr-12 hidden lg:block">
            <span>Mạng xã hội</span>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/handmade.by.minhhien95"
              target="_blank"
              className="mr-6 text-gray-600"
            >
              <FaFacebookF className="text-headline6" />
            </a>

            <SiZalo onClick={handleToggle} className="text-headline5 mr-6" />

            <a
              href="https://www.instagram.com/minhhien_accessories/"
              target="_blank"
              className="mr-6 text-gray-600"
            >
              <AiFillInstagram className="text-headline6" />
            </a>
          </div>
        </div>
        <div
          className={`${
            isHide ? "hidden" : ""
          } mx-auto w-[300px] mt-5 pb-5 bg-light2 rounded-lg drop-shadow-2xl`}
        >
          <p className=" font-700">Zalo</p>
          <img src={Qrcode} className="w-1/2 mx-auto" alt="" />
          <p className=" font-700">0964 608 302</p>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="md:flex justify-center gap-8">
          <div className="">
            <h6
              className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              MINH HIEN ACCESSORIES
            </h6>
            <p>
              Thật vinh hạnh cho Minh Hien Accessories khi được đồng hành cùng
              bạn
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              Đ. Quan Nhân, Q. Thanh Xuân, TP. Hà Nội
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              contacts.minhhien@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              0964 608 302
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright:</span>
        <a
          className="text-gray-600 font-semibold"
          href="https://tailwind-elements.com/"
        >
          Minh Hien Accessories
        </a>
      </div>
    </footer>
  );
};

export default Footer;

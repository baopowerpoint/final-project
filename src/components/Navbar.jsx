import React, { useState } from "react";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Loading from "./Loading";
const Navbar = () => {
  const { logout, isPending, error } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(null);
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="relative w-full flex flex-wrap items-center  justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-5">
        <button
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-font-700 py-2  bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-font-700"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <Link
            onClick={() => {
              setCurrentPage("home");
            }}
            to="/"
            className={`text-xl  text-white pr-2 font-sans font-700`}
          >
            MINH HIEN
          </Link>

          <ul className="navbar-nav flex flex-col pl-0  mr-auto">
            <li className="nav-item p-2">
              <Link
                onClick={() => {
                  setCurrentPage("home");
                }}
                className={`text-xl ${
                  currentPage == "home" ? "font-700" : ""
                } text-white pr-2 font-sans `}
                to="/"
              >
                Trang chủ
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                onClick={() => {
                  setCurrentPage("products");
                }}
                to="products/all"
                className={`text-xl ${
                  currentPage == "products" ? "font-700" : ""
                } text-white pr-2 font-sans `}
              >
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item p-2 ">
              <Link
                onClick={() => {
                  setCurrentPage("course");
                }}
                to="course"
                className={`text-xl ${
                  currentPage == "course" ? "font-700" : ""
                } text-white pr-2 font-sans `}
                href="#"
              >
                Khoá học
              </Link>
            </li>
            {/* <li className="nav-item p-2 ">
              <Link
                onClick={() => {
                  setCurrentPage("about");
                }}
                to="about"
                className={`text-xl ${
                  currentPage == "about" ? "font-700" : ""
                } text-white pr-2 font-sans `}
              >
                Về chúng tôi
              </Link>
            </li> */}
            {user && user.email === "baopowerpoint@gmail.com" && (
              <li className="nav-item p-2 ">
                <Link
                  onClick={() => {
                    setCurrentPage("admin");
                  }}
                  to="admin"
                  className={`text-xl ${
                    currentPage == "admin" ? "font-700" : ""
                  } text-white pr-2 font-sans `}
                >
                  Admin
                </Link>
              </li>
            )}
            {user && user.email === "baopowerpoint@gmail.com" && (
              <li className="nav-item p-2">
                <Link
                  onClick={() => {
                    setCurrentPage("manage");
                  }}
                  to="product-managing"
                  className={`text-xl ${
                    currentPage == "manage" ? "font-700" : ""
                  } text-white pr-2 font-sans `}
                >
                  Quản lý sản phẩm
                </Link>
              </li>
            )}
          </ul>
        </div>
        {!user && (
          <div>
            <Link to="login">
              <button className="bg-blue text-light font-700 px-5 py-1 rounded-lg">
                Đăng Nhập
              </button>
            </Link>
          </div>
        )}

        {user && (
          <div className="flex  items-center relative">
            <div className="dropdown relative">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="rounded-full w-[25px] h-[25px] mx-2 cursor-pointer"
                />
              ) : (
                <Gravatar
                  email={user.email}
                  className="rounded-full w-[25px] h-[25px] mx-2 cursor-pointer"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
              )}

              <ul
                className={`absolute ${
                  isOpen ? "" : "hidden"
                } bg-light -left-36 z-50 rounded-md shadow-lg`}
              >
                <li>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="profile"
                    className="d text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-dark font-500 hover:font-700"
                  >
                    Hồ sơ
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="course"
                    className="d text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-dark font-500 hover:font-700"
                  >
                    Khoá học của tôi
                  </Link>
                </li>
                {user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="  text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-dark font-500 hover:font-700   "
                    >
                      {isPending ? <Loading /> : "Đăng xuất"}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

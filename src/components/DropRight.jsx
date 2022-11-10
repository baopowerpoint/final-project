import React from "react";
import { Link } from "react-router-dom";
function DropRight({ name, category }) {
  return (
    <div class="flex justify-center">
      <div>
        <div class="dropend relative ">
          <button
            class="
          dropdown-toggle
          px-6
          py-2.5
          z-0
          leading-tight
          rounded
          focus:bg-blue-700 
          active:bg-blue-800 active:shadow-lg active:text-white
          flex
          items-center
          whitespace-nowrap
        "
          >
            {name}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-right"
              class="w-1.5 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
              ></path>
            </svg>
          </button>
          <ul
            class="
          absolute
          bg-light hidden
          top-0 -right-10
          z-50
        "
          >
            <li>
              <Link to={`/products/${category}`}>Tất cả</Link>
            </li>
            <li>
              <Link to={`/products/${category}/450`}>100k đến 450k</Link>
            </li>
            <li>
              <Link to={`/products/${category}/950`}>500k đến 950k</Link>
            </li>
            <li>
              <Link to={`/products/${category}/1500`}>1M đến 1,5M</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropRight;

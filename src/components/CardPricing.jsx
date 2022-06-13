import React from "react";

const CardPricing = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-5">
      {" "}
      <div className="shadow-lg rounded-2xl mt-10 w-full  bg-white dark:bg-gray-800 p-4">
        <p className="text-gray-800 dark:text-gray-50 text-headline6 font-600 mb-4">
          Học phí
        </p>
        <p className="text-gray-900 dark:text-white line-through text-3xl font-bold">
          9.000.000 VNĐ
        </p>
        <p className="text-gray-600 dark:text-gray-100  text-headline4 font-600 ">
          5.990.000 VNĐ
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            Sở hữu trọn đời
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            Không phụ thu phí
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            Được hỗ trợ tận tình
          </li>

          <li className="mb-3 flex items-center line-through opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              className="h-6 w-6 mr-2"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            Giảm 10% tổng thanh toán
          </li>
        </ul>
        <button
          type="button"
          className="py-2 px-4 bg-blue text-light font-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Liên hệ
        </button>
      </div>{" "}
    </div>
  );
};

export default CardPricing;

import React from "react";
import { Link } from "react-router-dom";

function NotFound({ isPurchased }) {
  return (
    <div>
      <p className="text-headline4 font-700 text-center">404 NOT FOUND</p>
      {!isPurchased && (
        <div className="text-center">
          <p>Bạn chưa thanh toán khoá học</p>
          <Link to="/course">
            <button className="text-blue underline">
              Đi đến trang báo giá
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NotFound;

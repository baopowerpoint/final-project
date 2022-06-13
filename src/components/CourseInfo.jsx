import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
const CourseInfo = () => {
  return (
    <div className="text-center border-[1px] border-med rounded-lg mt-10">
      <h1 className="text-headline4 font-bold text-center my-5">
        Khoá học đính kết
      </h1>
      <div className="flex items-center justify-center gap-5">
        <img
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/248681365_3000577810185113_6734203646219205847_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cB3LNwEbjpYAX8pGtMJ&tn=m9PFBFWiw_cRCXK8&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_TdD3R0p2gBLsD8hURe9EuStRWBlwvI9iF1JOWdXNLOw&oe=62A69921"
          alt="instructor"
          className="w-20 h-20 rounded-full"
        />
        <div className="text-left my-5">
          <p className="text-light-rd">Giảng viên</p>
          <p className=" text-headline5">Bùi Thị Minh Hiền</p>
        </div>
      </div>
      <div className="flex mb-5 text-heading6 items-center justify-center gap-4">
        <MdAccessTimeFilled />
        <p> 2h30p</p>
      </div>
      <div
        className=" rounded-lg bg-[#92e6a7] py-5 px-6 text-headline6 w-2/3 mx-auto text-[#1a7431] mb-3"
        role="alert"
      >
        Bạn đã thanh toán khoá học !
      </div>
      <Link to="/courses/learning">
        <button className="bg-blue px-5 py-1 my-5 rounded-lg text-heading6 text-light">
          Học ngay
        </button>
      </Link>
    </div>
  );
};

export default CourseInfo;

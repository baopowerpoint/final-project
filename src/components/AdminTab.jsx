import React from "react";
import Signup from "../pages/signup";
import PostForm from "./PostForm";
import UserTable from "./UserTable";

const AdminTab = () => {
  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row md:justify-center flex-wrap  list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
        nav-link
        block
        font-medium
        text-xs
        leading-tight
        uppercase
        border-x-0 border-t-0 border-b-[1px] border-transparent
        px-6
        py-3
        my-2
        hover:border-transparent hover:bg-gray-100
        focus:border-transparent
        active
      "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Tạo tài khoản cho học viên
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className="
        nav-link
        block
        font-medium
        text-xs
        leading-tight
        uppercase
        border-x-0 border-t-0 border-b-[1px] border-transparent
        px-6
        py-3
        my-2
        hover:border-transparent hover:bg-gray-100
        focus:border-transparent
      "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Quản lý học viên
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            className="
        nav-link
        block
        font-medium
        text-xs
        leading-tight
        uppercase
        border-x-0 border-t-0 border-b-[1px] border-transparent
        px-6
        py-3
        my-2
        hover:border-transparent hover:bg-gray-100
        focus:border-transparent
      "
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Quản lý bài đăng
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          <Signup />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <UserTable />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <PostForm />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-contact"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};

export default AdminTab;

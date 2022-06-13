import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { storage } from "../firebase/firebaseConfig";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import ProgressBar from "./ProgressBar";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    setFileError(null);
    if (file) {
      if (file.size > 20000000) {
        setFileError("Kích thước ảnh quá lớn");
        return;
      }
      if (!file.type.includes("image")) {
        setFileError("Vui lòng xem lại định dạng");
        return;
      }
    }
  }, [file]);
  console.log(fileError);
  return (
    <div className="block p-6 rounded-lg shadow-lg mx-auto bg-white max-w-md">
      <form>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-med
        rounded
        transition
        ease-in-out
        m-0
        "
            id="exampleInput7"
            placeholder="Tiêu đề"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-med
        rounded
        transition
        ease-in-out
        m-0
        "
            id="exampleInput8"
            placeholder="Nội dung"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-med
        rounded
        transition
        ease-in-out
        m-0
        "
            id="exampleInput8"
            placeholder="Giá"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="mb-3 xl:w-96">
          <select
            onChange={(e) => {
              console.log(e.target.value);
            }}
            className="form-select appearance-none
      block
      w-full
      px-3
      mb-10
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-med
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option defaultValue="">Chọn mục</option>
            <option value="1">Đính kết</option>
            <option value="2">Huy hiệu</option>
            <option value="3">Hoa lụa</option>
          </select>
        </div>
        <div className="mb-3 w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Chọn ảnh
          </label>
          <input
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue
      text-light
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;

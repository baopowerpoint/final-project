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
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [category, setCategory] = useState("");

  const [imgUrl, setImgUrl] = useState(null);
  const [angles, setAngles] = useState([]);
  const [progress, setProgress] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    console.log(angles);
  }, [angles]);
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
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImg = e.target.files[i];
      newImg["id"] = Math.random();
      setAngles((prevState) => [...prevState, newImg]);
    }
    console.log(angles);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const storageRef = ref(
      storage,
      `products/${category}/${file.name + file.size}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl((prevState) => [...prevState, url]);
        });
      }
    );
    if (progress === 100) {
      setTitle("");
      setContent("");
      setPrice("");
      setCategory(null);
      setAngles(null);
      setFile(null);
    }
  };
  useEffect(() => {
    function addDocument() {
      if (imgUrl) {
        addDoc(collection(db, "posts"), {
          title,
          content,
          category,
          price,
          angles,
          imgUrl,
        });
      } else {
        return;
      }
    }
    addDocument();
  }, [imgUrl]);
  if (progress === 100) {
    setProgress(null);
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg mx-auto bg-white max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <input
            type="text"
            defaultValue=""
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-med rounded transition ease-in-out m-0 "
            id="exampleInput7"
            placeholder="Tiêu đề"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {!title && <p className="text-red">Vui lòng điền tiêu đề</p>}
        </div>
        <div className="form-group mb-6">
          <input
            defaultValue=""
            type="text"
            className="  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-med rounded transition ease-in-out  m-0
        "
            placeholder="Nội dung"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          {!content && <p className="text-red">Vui lòng điền nội dung</p>}
        </div>
        <div className="form-group mb-6">
          <input
            defaultValue=""
            type="text"
            className="  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-med rounded transition ease-in-out m-0 "
            placeholder="Giá"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          {!price && <p className="text-red"> vui lòng điền giá</p>}
        </div>

        <div className="mb-3 xl:w-96">
          <select
            defaultValue=""
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-select appearance-none block w-full px-3 mb-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-med rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option>Chọn mục</option>
            <option value="dinhket">Đính kết</option>
            <option value="doda">Huy hiệu</option>
            <option value="hoavai">Hoa lụa</option>
          </select>
          {!category && <p className="text-red">Vui lòng chọn một mục</p>}
        </div>
        <div className="mb-3 w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Chọn ảnh
          </label>
          <input
            defaultValue={null}
            className="  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          {!file && <p className="text-red">Vui lòng chọn ảnh</p>}
          {fileError && <p className="text-red ">{fileError}</p>}
        </div>
        <div className="mb-3 w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Chọn các góc khác
          </label>
          <input
            defaultValue={null}
            className="  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
            multiple
            onChange={handleChange}
          />
          {!file && <p className="text-red">Vui lòng chọn ảnh</p>}
          {fileError && <p className="text-red ">{fileError}</p>}
        </div>

        <button
          type="submit"
          disabled={
            isPending ||
            progress ||
            fileError ||
            !title ||
            !content ||
            !price ||
            !file ||
            !category
          }
          className=" w-full px-6 py-2.5 bg-blue text-light font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Post
        </button>
        {progress && <ProgressBar progress={progress} />}
      </form>
    </div>
  );
};

export default PostForm;

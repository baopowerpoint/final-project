import React, { useEffect, useState } from "react";
import CourseBundled from "../components/CourseBundled";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiXSquare } from "react-icons/fi";
import { useCollection } from "../hooks/useCollection";
import VideoPlayer from "../components/VideoPlayer";
import "./learningArea.css";
const LearningArea = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const { documents } = useCollection("dinhket");
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (documents) {
      const res = documents.find((item) => item.id === id);
      setUrl(res.videoUrl);
      setTitle(`Bài ${res.param}:${res.title}`);
    }
  }, [id, documents]);

  return (
    <div className=" lg:flex relative lg:flex-row">
      <div className=" basis-4/6 m-3 relative">
        <p className="text-headline5 font-700">{title}</p>
        {url && <VideoPlayer url={url} />}
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute hidden lg:block cursor-pointer top-10 right-10 text-headline5"
      >
        {" "}
        <AiOutlineMenuFold />
      </button>

      <div
        className={`lg:absolute  lg:top-0 ${
          isOpen ? "" : "lg:hidden"
        } bg-light lg:right-0`}
      >
        <button
          className="cursor-pointer hidden lg:block text-headline4"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FiXSquare />
        </button>
        <div className="flex items-center  my-5 justify-center gap-10">
          <button
            disabled={id === 1}
            onClick={() => {
              navigate(`/courses/learning/${id - 1}`);
            }}
          >
            <div className="flex  items-center gap-3 text-headline6 text-light bg-blue py-1 px-5 rounded-lg ">
              <BsArrowLeftCircleFill />
              <p>Bài trước</p>
            </div>
          </button>
          <button
            onClick={() => {
              navigate(`/courses/learning/${parseInt(id) + 1}`);
            }}
          >
            <div className="flex items-center gap-3 text-headline6 text-light bg-blue py-1 px-5 rounded-lg ">
              <p>Bài tiếp</p>
              <BsArrowRightCircleFill />
            </div>
          </button>
        </div>
        <CourseBundled />
      </div>
    </div>
  );
};

export default LearningArea;

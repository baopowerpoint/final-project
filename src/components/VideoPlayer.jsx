import React, { forwardRef } from "react";
import { useState, useEffect } from "react";
import { MdFullscreen } from "react-icons/md";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";
import { MdFastRewind, MdFastForward } from "react-icons/md";
import Loading from "./Loading";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const VideoPlayer = ({ url }) => {
  const [toggle, setToggle] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const ref = useRef(null);
  const playerRef = useRef(null);
  const { documents } = useCollection("users");

  const { user } = useAuthContext();

  useEffect(() => {
    if (documents && user) {
      const a = documents.find((a) => a.id == user.uid);
    }
  }, [user, documents]);
  const toggleFullScreen = () => {
    if (document.fullscreenElement === null) {
      ref.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const handleProgress = (state) => {
    setPlayed(parseFloat(state.played));
    // We only want to update time slider if we are not currently seeking
  };
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };
  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    playerRef.current.seekTo(e.target.value);
  };
  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  return (
    <div
      ref={ref}
      className="player-wrapper relative max-w-7xl"
      id="my-element"
    >
      <div className="absolute -z-10 top-1/2 -translate-y-2/3 -translate-x-full left-1/2 ">
        <Loading />
      </div>{" "}
      <button onClick={toggleFullScreen} className="absolute z-[2147483647]">
        <MdFullscreen className="text-light text-headline4" />
      </button>
      <ReactPlayer
        className="react-player w-full "
        ref={playerRef}
        playing={isPlaying}
        url={url}
        volume={1}
        playsinline
        config={{
          file: {
            attributes: {
              onContextMenu: (e) => e.preventDefault(),
            },
          },
        }}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        width="100%"
        height="100%"
      />
      {user && (
        <p className="absolute top-1/2 text-body right-1/3 text-light  font-600 opacity-50">
          {user.email}
        </p>
      )}
      <div className="controls-wrapper bg-dark flex justify-between  flex-col z-[200]">
        {/* <div className="">
          <p className="title  text-light bg-dark bg-opacity-40 text-headline6 font-700 ">
            {videoTitle}
          </p>
        </div> */}

        <div className="p-2">
          <input
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onPointerUp={handleSeekMouseUp}
            onPointerDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
            onChange={handleSeekChange}
            type="range"
            className="w-full  cursor-pointer focus:outline-none  "
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={handleRewind}>
                {/* <MdFastRewind
                  
                  className=" text-light4 hover:text-light text-headline4"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  strokeWidth="2.5"
                  stroke="#CACBD2"
                  fill="none"
                  className="duration-300 transform transition-all"
                  style={{ width: "48px", height: "48px" }}
                >
                  <path
                    strokeLinecap="round"
                    d="M9.57 15.41l2.6 8.64 8.64-2.61M26.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
                  ></path>
                  <rect
                    x="32.19"
                    y="22.52"
                    width="11.41"
                    height="18.89"
                    rx="5.7"
                  ></rect>
                  <path
                    d="M12.14 23.94a21.91 21.91 0 11-.91 13.25"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              <button onClick={handlePlay}>
                {!isPlaying && (
                  <RiPlayFill className=" text-light4 hover:text-light text-headline4" />
                )}
                {isPlaying && (
                  <RiPauseFill className=" text-light4 hover:text-light text-headline4" />
                )}
              </button>
              <button onClick={handleFastForward}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  strokeWidth="2.5"
                  stroke="#CACBD2"
                  fill="none"
                  className="duration-300 transform transition-all"
                  style={{ width: "48px", height: "48px" }}
                >
                  <path
                    d="M23.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
                    strokeLinecap="round"
                  ></path>
                  <rect
                    x="29.19"
                    y="22.52"
                    width="11.41"
                    height="18.89"
                    rx="5.7"
                  ></rect>
                  <path
                    strokeLinecap="round"
                    d="M54.43 15.41l-2.6 8.64-8.64-2.61M51.86 23.94a21.91 21.91 0 10.91 13.25"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <div className="text-dark font-500 flex gap-5 bg-light rounded-sm p-1  ">
                <button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className=" flex order-2 font-700"
                >
                  {playbackRate}X
                </button>
                {toggle && (
                  <div className="flex flex-row gap-2">
                    {[0.5, 1, 1.25, 1.5, 2].map((item) => (
                      <button
                        onClick={() => {
                          setPlaybackRate(item);
                          setToggle(false);
                        }}
                        key={item}
                        className=""
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

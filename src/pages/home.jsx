import React from "react";
import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";
import CourseIntroduction from "../components/CourseIntroduction";
import Feedback from "../components/Feedback";
import Productions from "../components/Productions";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

//check ip
import axios from "axios";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "../hooks/useCollection";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../firebase/firebaseConfig";

const Home = () => {
  const [ip, setIp] = useState(null);
  const [volume, setVolume] = useState(0);
  const { documents: users } = useCollection("users");
  const { user } = useAuthContext();
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIp(res.data.IPv4);
  };

  useEffect(() => {
    const checkIp = async () => {
      await getData();
      if (users && user) {
        const currentUser = users.find((a) => a.id == user.uid);

        if (currentUser) {
          if (currentUser.ip.length <= 1 && ip && currentUser.ip[0] !== ip) {
            let ips = [];
            ips.push(ip);
            console.log(currentUser.ip);
            await updateDoc(doc(db, "users", currentUser.id), {
              ip: ips,
            });
          }
          if (ip && currentUser.ip.length <= 2 && currentUser.ip[0] !== ip) {
            if (currentUser.ip[1] !== ip) {
              let ips = [];
              console.log("hello");
              ips.push(ip);
              await updateDoc(doc(db, "users", currentUser.id), {
                ip: ips,
              });
            }
          }
          if (ip && currentUser.ip.length <= 3 && currentUser.ip[0] !== ip) {
            if (currentUser.ip[1] !== ip) {
              if (currentUser.ip[2] !== ip) {
                let ips = [];
                console.log("hello");
                ips.push(ip);
                await updateDoc(doc(db, "users", currentUser.id), {
                  ip: ips,
                });
              }
            }
          }
        }
      }
    };
    checkIp();
  }, []);

  return (
    <div>
      <div className="px-5 mx-auto my-5 max-w-[800px] ">
        {/* <div className="max-w-[500px] mx-auto">
          <Carousel />
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, type: "linear", duration: 2 }}
          className="player-wrapper w-full"
        >
          <ReactPlayer
            loop={true}
            url="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/Video_Introduction%2F90279E2E-D8F7-4E6D-AB4D-4A02E93C.mp4?alt=media&token=2dbe5af8-fd9f-4e9e-9c4f-9a2bb75b282f"
            className="react-player"
            playing={true}
            playsinline={true}
            volume={volume}
            width="100%"
            height="100%"
            controls
          />
        </motion.div>
        <Productions />
        <CourseIntroduction />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;

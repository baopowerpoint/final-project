import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CourseIntroduction from "../components/CourseIntroduction";
import Feedback from "../components/Feedback";
import Productions from "../components/Productions";

//check ip
import axios from "axios";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "../hooks/useCollection";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../firebase/firebaseConfig";

const Home = () => {
  const [ip, setIp] = useState(null);
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
        <div className="max-w-[500px] mx-auto">
          <Carousel />
        </div>
        <Productions />
        <CourseIntroduction />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;

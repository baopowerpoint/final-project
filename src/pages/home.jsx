import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CourseIntroduction from "../components/CourseIntroduction";
import Feedback from "../components/Feedback";
import Productions from "../components/Productions";

const Home = () => {
  return (
    <div>
      <div className="px-5 mx-auto my-5 max-w-[800px] ">
        <Carousel />
        <Productions />
        <CourseIntroduction />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

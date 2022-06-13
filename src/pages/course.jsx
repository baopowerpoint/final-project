import React from "react";
import CourseFeatures from "../components/CourseFeatures";
import CourseHeader from "../components/CourseHeader";
import Footer from "../components/Footer";
import CardPricing from "../components/CardPricing";
import CourseInfo from "../components/CourseInfo";
const Course = () => {
  return (
    <div>
      <div className="px-5 mx-auto my-5 max-w-[800px] ">
        <CourseHeader />
        <CourseInfo />
        <CourseFeatures />
        <CardPricing />
      </div>
      <Footer />
    </div>
  );
};

export default Course;

import React from "react";
import CourseFeatures from "../components/CourseFeatures";
import CourseHeader from "../components/CourseHeader";
import Footer from "../components/Footer";
import CardPricing from "../components/CardPricing";
import CourseInfo from "../components/CourseInfo";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { useEffect } from "react";
import CoursePrincipal from "../components/CoursePrincipal";

const Course = () => {
  const { user } = useAuthContext();
  const { documents } = useCollection("users");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (documents && user) {
      setCurrentUser(
        documents.find((document) => document.email === user.email)
      );
    }
  }, [documents, currentUser]);

  return (
    <div>
      {currentUser && (
        <div>
          <div className="px-5 mx-auto my-5 max-w-[800px] ">
            <CourseHeader isPurchased={currentUser.isPurchased} />

            <CourseInfo isPurchased={currentUser.isPurchased} />
            <CourseFeatures />
            <CoursePrincipal />
            {!currentUser.isPurchased && (
              <div className="mx-auto">
                <CardPricing />
              </div>
            )}
          </div>
        </div>
      )}

      {!user && (
        <div className="px-5 mx-auto my-5 max-w-[800px]">
          <CourseHeader isPurchased={false} />
          <CourseInfo isPurchased={false} />
          <CourseFeatures />
          <CoursePrincipal />
        </div>
      )}
    </div>
  );
};

export default Course;

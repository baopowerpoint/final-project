import React from "react";
import CourseBundled from "../components/CourseBundled";

const LearningArea = () => {
  return (
    <div>
      {" "}
      <div
        class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/minh-hien-accessories.appspot.com/o/lectures%2FPart%201%2Fbandicam%202022-05-03%2021-32-17-587.mp4?alt=media&token=5381b5b4-da5c-46df-afe3-cc1dbf039893"
          allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
      <CourseBundled />
    </div>
  );
};

export default LearningArea;

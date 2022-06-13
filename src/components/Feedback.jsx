import React from "react";

const Feedback = () => {
  return (
    <div className="mt-20">
      <p className="text-headline4 text-center">Feedback</p>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Đây quả thực là một khoá học mà em tìm kiếm bấy lâu, giảng viên
              tận tâm, khoá học bài bản và được hướng dẫn một cách tỉ mỉ, kiên
              nhẫn.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/241214033_830744174255875_7889335991906351718_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=A9KIaoFExSIAX-Nihbk&_nc_ht=scontent.fhan2-1.fna&oh=00_AT-3tnwvBlKDvtMxfeLkud5UdfNImvH5cR-iDrDrB1sBjA&oe=62A96418"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Trần Bảo</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Đây quả thực là một khoá học mà em tìm kiếm bấy lâu, giảng viên
              tận tâm, khoá học bài bản và được hướng dẫn một cách tỉ mỉ, kiên
              nhẫn.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/278925130_705617490882782_1002634865451864080_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=18mJG7E6u0kAX_jrdV1&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-PgZD7-apQdHAih5ZEXUD62WHluAKSi07WcAcvIpo-bA&oe=62A97043"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Minh Hiền</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Đây quả thực là một khoá học mà em tìm kiếm bấy lâu, giảng viên
              tận tâm, khoá học bài bản và được hướng dẫn một cách tỉ mỉ, kiên
              nhẫn.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/132464471_693697181293909_1048832398094905689_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=iPWkKJDQKJsAX_DHnBH&tn=m9PFBFWiw_cRCXK8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_18Tcpq3d1WSK6JzvrajeU89y-BElfxx07af94YlX5qQ&oe=62CB0D26"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Quang Anh</p>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Feedback;

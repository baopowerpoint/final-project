import React from "react";

const ProductCollection = () => {
  return (
    <div>
      <div className=" overflow-hidden my-10 relative ">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/271787544_3059503830959177_468456972845395376_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=2l224Pqvyx8AX_qK4za&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_n4V41AFj91QKSaxIF5Jc3875eaDGNVQlOWEaF3QGJEg&oe=62A9F606"
          className=" w-full"
          alt="item"
        />
        <div className="absolute opacity-0 transition-all east-in-out duration-300 hover:opacity-100 w-full h-full bg-dark top-0 left-0 right-0 bottom-0 cursor-pointer">
          <div className="absolute text-center top-1/2 text-light left-1/2 -translate-x-1/2 -translate-y-1/2 text-headline4 font-500 uppercase">
            Đính kết
          </div>
        </div>
      </div>
      <div className=" overflow-hidden my-10 relative ">
        <img
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/271803809_3059503747625852_443504305197481453_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=C8B4ISDw8QIAX-VpUFd&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_oE7abTh-aJO2GbKwDOluZtmcNCd1Kc_iubHLkPUIhmw&oe=62A8DE8F"
          alt="item"
        />
        <div className="absolute opacity-0 transition-all east-in-out duration-300 hover:opacity-100 w-full h-full bg-dark top-0 left-0 right-0 bottom-0 cursor-pointer">
          <div className="absolute text-center top-1/2 text-light left-1/2 -translate-x-1/2 -translate-y-1/2 text-headline4 font-500 uppercase">
            Huy Hiệu
          </div>
        </div>
      </div>
      <div className=" overflow-hidden my-10 relative ">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/274243309_3087665614809665_7418977424991080071_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WK_G4OaW7JoAX-uIl3V&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8YMVRbhGijZvqrYgd1VFbvvNKOaTUGv65Ff3_JQp6TjA&oe=62AAB3B6"
          className=" w-full"
          alt="item"
        />
        <div className="absolute opacity-0 transition-all east-in-out duration-300 hover:opacity-100 w-full h-full bg-dark top-0 left-0 right-0 bottom-0 cursor-pointer">
          <div className="absolute text-center top-1/2 text-light left-1/2 -translate-x-1/2 -translate-y-1/2 text-headline4 font-500 uppercase">
            Hoa lụa
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;

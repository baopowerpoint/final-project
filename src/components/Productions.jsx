import React from "react";
import SelectBar from "./SelectBar";

const Productions = () => {
  return (
    <div>
      <p className="text-center uppercase text-headline4 mt-20 my-5">
        Sản phẩm
      </p>
      <SelectBar />
      <div className="grid grid-cols-3  gap-5">
        <div className="w-full h-fit shadow-sm">
          <img
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/277480071_3112539678988925_4173511212442116183_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=lMS3tqy4bjYAX_m3wHe&_nc_oc=AQmkms7Bx9J1eCcJvyW1E2PrdXiYhl6y-xbBxvUOFuEEPneqQHKL18Pl6ZA1QBm-lsQ&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9EVzE84RfGO06RNdpYnZ5kPj8oJw_RDg-RunoFNSk6KA&oe=62A904B6"
            alt=""
            className="w-full h-full "
          />
          <div className="text-center m-5">
            <p className="text-body2">Đính kết</p>
            <p className="font-500 text-body1">100.000 VNĐ</p>
          </div>
        </div>
        <div className="w-full h-fit shadow-sm">
          <img
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/274525103_3087665631476330_7176305427717726523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=mcZ5LODUMi8AX9zWJqQ&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-HUrwNIoUyuXy0LJUv2IKEgTYX1h8FsOKk2zY9VeFFfQ&oe=62AB2A99"
            alt=""
            className="w-full h-full "
          />
          <div className="text-center m-5">
            <p className="text-body2">Đính kết</p>
            <p className="font-500 text-body1">100.000 VNĐ</p>
          </div>
        </div>
        <div className="w-full h-fit shadow-sm">
          <img
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/275933728_3104387769804116_8676722135514019079_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=k7z6pDDIoUIAX9QRDUe&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8_lfFgv2lt_Sz84zZxz8W1XouwbUGk7vvSu6lina9aAw&oe=62AA96DF"
            alt=""
            className="w-full h-full "
          />
          <div className="text-center m-5">
            <p className="text-body2">Đính kết</p>
            <p className="font-500 text-body1">100.000 VNĐ</p>
          </div>
        </div>
        <div className="w-fit h-fit shadow-sm">
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/275982977_3105876366321923_1209458469932564844_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-XIW1qpAr9kAX97WKRp&_nc_ht=scontent.fhan2-1.fna&oh=00_AT9BC5UUW_ggffD9j5yeYZuBcJkdp9VDpx3KYC1hw6vwZw&oe=62A9F043"
            alt=""
            className="w-full h-full "
          />
          <div className="text-center m-5">
            <p className="text-body2">Đính kết</p>
            <p className="font-500 text-body1 ">100.000 VNĐ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { SiZalo } from "react-icons/si";
import { useCollection } from "../hooks/useCollection";

function SpecifiedProduct() {
  const [product, setProduct] = useState(null);
  const [imgUrls, setImgUrls] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  const { name, id } = useParams();
  const { documents: post, error, isPending } = useCollection("posts");
  useEffect(() => {
    if (post) {
      const product = post.find((product) => product.id === id);
      setProduct(product);
      setImgUrls(product.imgUrls);
      if (imgUrls) {
        setMainImg(imgUrls[0]);
      }
    }
  }, [post, imgUrls]);
  return (
    product && (
      <div className="lg:flex max-w-[800px] justify-center mx-auto my-5">
        <div className="min-w-[400px]">
          {mainImg && (
            <div className="flex justify-center w-10/12 gap-5 mx-auto  max-w-[800px]">
              <img src={mainImg} alt="" />
            </div>
          )}
          {imgUrls && (
            <div>
              <div className="flex justify-start w-10/12 gap-5 mx-auto my-5 ">
                {imgUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer"
                    onClick={() => {
                      if (imgUrls) {
                        setMainImg(imgUrls[idx]);
                      }
                    }}
                  >
                    <img
                      className="w-[100px] h-[100px] object-cover"
                      src={url}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-10/12 mx-auto">
          <h1 className="text-headline4 font-700 ">
            Mã sản phẩm: {product.title}
          </h1>
          <h1 className="text-headline6 text-red font-700 ">
            {" "}
            <span className="text-dark"> Giá lẻ:</span>{" "}
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            VNĐ/ SP
          </h1>
          {/* <h1 className="text-body font-400 ">{product.content}</h1> */}
          {product.wholeSale && (
            <h1 className="text-headline6  font-400 ">
              {" "}
              <span className="text-dark font-700">
                Từ {product.wholeSale.split("-")[1]} sản phẩm:
              </span>{" "}
              <span className="text-red font-700">
                {product.wholeSale
                  .substring(0, product.wholeSale.indexOf("-"))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                {"VNĐ"}/ SP
              </span>{" "}
            </h1>
          )}
          {product.wholeSale && (
            <div>
              <h1 className="text-body mt-10 font-500 ">
                Muốn sản xuất với số lượng lớn hơn?
              </h1>
              <a href="https://zalo.me/0964608302" target="_blank">
                <button className="bg-dark text-btn text-light font-400 px-5 py-1 rounded-sm block mt-2">
                  {" "}
                  Liên hệ ngay
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default SpecifiedProduct;

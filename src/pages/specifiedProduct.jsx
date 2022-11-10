import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ
          </h1>
          <h1 className="text-body font-400 ">{product.content}</h1>
        </div>
      </div>
    )
  );
}

export default SpecifiedProduct;

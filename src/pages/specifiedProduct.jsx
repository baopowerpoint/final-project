import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

function SpecifiedProduct() {
  const [product, setProduct] = useState(null);
  const { name, id } = useParams();
  const { documents: post, error, isPending } = useCollection("posts");
  useEffect(() => {
    if (post) {
      const product = post.find((product) => product.id === id);
      setProduct(product);
    }
  }, [post]);
  return (
    <div>
      {product && (
        <div>
          <div className="grid grid-cols-5 grid-rows-6 p-20 gap-5 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 max-w-[800px]">
            {product.imgUrls.map((url, idx) => (
              <div
                className={
                  idx === 0 ? "col-span-4 row-span-4" : "col-auto row-auto"
                }
              >
                <img src={url} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecifiedProduct;

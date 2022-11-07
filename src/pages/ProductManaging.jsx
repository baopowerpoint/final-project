import React from "react";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
function ProductManaging() {
  const { documents: products } = useCollection("posts");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleUpdatePrice = async (id) => {
    const price = prompt();
    if (price) {
      await updateDoc(doc(db, "posts", id), {
        price: price,
      });
    }
  };
  const handleUpdateTitle = async (id) => {
    const title = prompt();
    if (title) {
      await updateDoc(doc(db, "posts", id), {
        title: title,
      });
    }
  };
  useEffect(() => {
    if (products) {
      const filteredProducts = products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredProducts(filteredProducts);
    }
  }, [products]);

  return (
    <div className="mt-10">
      <div className="text-headline5 text-center">Quản lý sản phẩm</div>

      <div>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div className="flex mt-5">
              <img
                className="w-[200px] h-[200px]"
                src={product.imgUrls[0]}
                alt=""
              />
              <h1>{product.price}</h1>
              <h1 className="mx-10">{product.title}</h1>
              <button
                onClick={() => {
                  handleUpdatePrice(product.id);
                }}
                className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
              >
                sửa giá
              </button>
              <button
                onClick={() => {
                  handleUpdateTitle(product.id);
                }}
                className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
              >
                sửa tên
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductManaging;

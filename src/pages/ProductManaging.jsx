import React from "react";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
function ProductManaging() {
  const { documents: products } = useCollection("posts");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category,setCategory] = useState(null)
  const handleUpdatePrice = async (id) => {
    const price = prompt();
    if (price) {
      await updateDoc(doc(db, "posts", id), {
        price: price,
      });
    }
  };
  const handleUpdateCategory = async (id) => {
    
    if (category) {
      await updateDoc(doc(db, "posts", id), {
        category:category,
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
              <h1>{product.price.toLocaleString('pl-PL')}</h1>
              <h1 className="mx-10">{product.title}</h1>
              <h1 className="mx-10">{product.category}</h1>
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
              <div className='flex gap-1 flex-grow-0'><select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">Các sản phẩm nổi bật</option>
            <option value="dinhket">Đính kết</option>
            <option value="hoavai">Hoa vải</option>
            <option value="doda">Đồ da</option>
            <option value="huyhieu">Huy hiệu</option>
            <option value="resindohat">Resin, đổ hạt</option>
          </select>
          <button
                onClick={() => {
                  handleUpdateCategory(product.id);
                }}
                className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
              >
                sửa muc
              </button></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductManaging;

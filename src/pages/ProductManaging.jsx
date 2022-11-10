import React from "react";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
function ProductManaging() {
  const { documents: products } = useCollection("posts");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [field, setField] = useState(null);
  const [order, setOrder] = useState(299);

  const handleUpdatePrice = async (id) => {
    const price = prompt();
    if (price) {
      await updateDoc(doc(db, "posts", id), {
        price: price,
      });
    }
  };
  const handleUpdateWholeSale = async (id) => {
    const wholeSale = prompt();
    if (wholeSale) {
      await updateDoc(doc(db, "posts", id), {
        wholeSale: wholeSale,
      });
    }
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };
  const handleUpdateField = async (id) => {
    if (field) {
      await updateDoc(doc(db, "posts", id), {
        category: field,
      });
    }
  };
  const handleUpdateTitle = async (id) => {
    const a = products.find((product) => product.id === id);
    const title = prompt("Title", a.title.slice(0, 2) + a.order);
    if (title) {
      await updateDoc(doc(db, "posts", id), {
        title: title,
      });
    }
  };
  const handleAddOrder = async (id) => {
    await updateDoc(doc(db, "posts", id), { order: order });
    setOrder(order + 1);
  };
  useEffect(() => {
    if (products) {
      const filteredProducts = products.sort(
        (a, b) =>
          // a.title.localeCompare(b.title)
          a.order - b.order
      );
      setFilteredProducts(filteredProducts);
      if (category == "") {
        setFilteredProducts(products);
      }
      if (category == "hoavai") {
        setFilteredProducts(
          products.filter((val) => val.category === "hoavai")
        );
      }
      if (category == "dinhket") {
        setFilteredProducts(
          products.filter((val) => val.category === "dinhket")
        );
      }
      if (category == "doda") {
        setFilteredProducts(products.filter((val) => val.category === "doda"));
      }
      if (category == "huyhieu") {
        setFilteredProducts(
          products.filter((val) => val.category === "huyhieu")
        );
      }
      if (category == "resindohat") {
        setFilteredProducts(
          products.filter((val) => val.category === "resindohat")
        );
      }
    }
  }, [category, products]);

  return (
    <div className="mt-10">
      <div className="text-headline5 text-center">Quản lý sản phẩm</div>

      <div>
        <div className="mb-3 w-2/3 max-w-[300px]">
          <select
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
        </div>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div className="flex mt-5">
              <img
                className="w-[200px] h-[200px]"
                src={product.imgUrls[0]}
                alt=""
              />
              <h1>{product.price.toLocaleString("pl-PL")}</h1>
              <h1 className="mx-10">{product.title}</h1>
              <h1 className="mx-10">{product.category}</h1>
              {/* {product.wholeSale && (
                <h1 className="mx-10">{product.wholeSale}</h1>
              )} */}
              {order && <h1 className="mx-10">{product.order}</h1>}
              {/* <h1>{product.title.substring(product.title.indexOf("D") + 1)}</h1> */}
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
              {/* <button
                onClick={() => {
                  handleUpdateWholeSale(product.id);
                }}
                className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
              >
                sửa gia sx
              </button> */}
              <button
                onClick={() => {
                  handleAddOrder(product.id);
                }}
                className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
              >
                Thêm thứ tự
              </button>
              <button
                onClick={() => {
                  handleDelete(product.id);
                }}
                className="bg-red h-fit  px-5 mx-5 text-light rounded-lg"
              >
                Xóa
              </button>
              {/* <div className="flex gap-1 flex-grow-0">
                <select
                  onChange={(e) => {
                    setField(e.target.value);
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
                    handleUpdateField(product.id);
                  }}
                  className="bg-blue h-fit  px-5 mx-5 text-light rounded-lg"
                >
                  sửa muc
                </button>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductManaging;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

import Loading from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Pagination from "../components/Pagination";

function Collection() {
  const { documents: post, error, isPending } = useCollection("posts");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isDropped, setIsDropped] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);

  const { user } = useAuthContext();
  const { name, priceLevel } = useParams();
  const sorting = [{ name: "dinhket" }];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  useEffect(() => {
    if (post) {
      if (!name && !priceLevel) {
        setFilteredProducts(
          post
            .filter(
              (product) =>
                product.title == "3DDK148" ||
                product.title == "2DDK86" ||
                product.title == "2DDK90" ||
                product.title == "3DDK171" ||
                product.title == "3DDK173" ||
                product.title == "3DDK174" ||
                product.title == "2DDK7" ||
                product.title == "3DDK118" ||
                product.title == "3DDK120" ||
                product.title == "3DDK121" ||
                product.title == "3DDK122" ||
                product.title == "2DDK35" ||
                product.title == "2DDK37" ||
                product.title == "3DDK128" ||
                product.title == "3DDK130" ||
                product.title == "2DDK43" ||
                product.title == "2DDK40" ||
                product.title == "2DDK41" ||
                product.title == "3DDK131" ||
                product.title == "3DDK132" ||
                product.title == "3DDK133" ||
                product.title == "3DDK134" ||
                product.title == "3DDK135" ||
                product.title == "3DDK136" ||
                product.title == "3DDK137" ||
                product.title == "2DDK47" ||
                product.title == "2DDK48" ||
                product.title == "2DDK50" ||
                product.title == "2DDK52" ||
                product.title == "3DDK138" ||
                product.title == "3DDK140" ||
                product.title == "2DDK53" ||
                product.title == "3DDK141" ||
                product.title == "2DDK54" ||
                product.title == "3DDK143" ||
                product.title == "3DDK144" ||
                product.title == "3DDK146" ||
                product.title == "3DDK147"
            )
            .sort((a, b) => a.OSO - b.OSO) //tạm thời, sau bỏ filter //tạm thời, sau bỏ filter
        );
      }
      if (name && !priceLevel) {
        if (name === "all") {
          setFilteredProducts(
            post
              .filter((product) => product.category !== "doda")
              .sort((a, b) => b.time - a.time)
          ); //tạm thời, sau bỏ filter);
        } else {
          setFilteredProducts(
            post
              .filter((product) => product.category === name)
              .sort((a, b) => b.time - a.time)
          );
        }
      }
      if (name && priceLevel) {
        if (name == "all") {
          if (priceLevel == 450) {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    product.category !== "doda" //tạm thời, sau bỏ filter);
                )
                .sort((a, b) => b.time - a.time)
            );
          } else if (priceLevel == 950) {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    parseInt(product.price) >= 500000 &&
                    product.category !== "doda" //tạm thời, sau bỏ filter);
                )
                .sort((a, b) => b.time - a.time)
            );
          } else {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    parseInt(product.price) > 950000 &&
                    product.category !== "doda" //tạm thời, sau bỏ filter);
                )
                .sort((a, b) => b.time - a.time)
            );
          }
        } else {
          if (priceLevel == 450) {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    product.category == name
                )
                .sort((a, b) => b.time - a.time)
            );
          } else if (priceLevel == 950) {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    parseInt(product.price) >= 500000 &&
                    product.category == name
                )
                .sort((a, b) => b.time - a.time)
            );
          } else {
            setFilteredProducts(
              post
                .filter(
                  (product) =>
                    parseInt(product.price) <= parseInt(priceLevel) * 1000 &&
                    parseInt(product.price) > 950000 &&
                    product.category == name
                )
                .sort((a, b) => b.time - a.time)
            );
          }
        }
      }
    }
  }, [name, priceLevel, post]);

  return (
    <div className="mx-5">
      <div className="max-w-[1200px] mx-auto text-center md:flex md:justify-between mt-10">
        <div className="category  h-fit">
          <p className="text-headline6 font-500 ">Danh mục</p>
          <ul className="mt-5  flex flex-wrap gap-4 md:flex-col justify-center  text-left sticky top-0 left-0">
            <li className={`${!name ? "font-600" : ""} `}>
              <Link to="/products">
                Nổi bật{" "}
                <span>
                  <AiFillStar className="inline text-[#E38B29]" />
                </span>
              </Link>{" "}
            </li>
            <li className={`${name == "all" ? "font-600" : ""} `}>
              <div className="relative z-50">
                <button
                  className="focus:bg-blue z-50 focus:px-2 focus:py-1/2 focus:text-light focus:rounded-lg"
                  onClick={() => {
                    setCategory("all");
                    setIsDropped(true);
                  }}
                >
                  Tất cả
                </button>
                {isDropped && category == "all" && (
                  <div className="absolute z-50 bg-[#ffffff] font-500 w-[100px] right-0 p-2">
                    <ul className="text-center">
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          s
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/all"
                        >
                          Tất cả{" "}
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/all/450"
                        >
                          Từ 100k -{">"} 450k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/all/950"
                        >
                          Từ 500k -{">"} 950k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            if (isDropped) {
                              setCurrentPage(1);
                              setIsDropped(false);
                            }
                          }}
                          to="/products/all/2000"
                        >
                          Từ 1000k -{">"} 2000k
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* {isOpen && (
                <div>
                  {category === "all" && (
                    <div className="shadow-lg rounded-lg p-3 absolute top-0 right-0  ">
                      <div className="flex items-center justify-center cursor-pointer ">
                        <h1 className="text-headline6 ">Tất cả</h1>
                      </div>
                      { && (
                        <ul className="mt-5 z-50 flex flex-wrap gap-4 md:flex-col justify-center ">
                         
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )} */}
            </li>
            <li className={`${name == "dinhket" ? "font-600" : ""} `}>
              <div className="relative ">
                {" "}
                <button
                  className="focus:bg-blue focus:px-2 focus:py-1/2 focus:text-light focus:rounded-lg"
                  onClick={() => {
                    setCategory("dinhket");
                    setIsDropped(true);
                  }}
                >
                  Đính kết
                </button>
                {isDropped && category == "dinhket" && (
                  <div className="absolute z-50 bg-[#ffffff] font-500 w-[100px] right-0 p-2">
                    <ul className="text-center">
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/dinhket"
                        >
                          Tất cả{" "}
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/dinhket/450"
                        >
                          Từ 100k -{">"} 450k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/dinhket/950"
                        >
                          Từ 500k -{">"} 950k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/dinhket/2000"
                        >
                          Từ 1000k -{">"} 2000k
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className={`${name == "hoavai" ? "font-600" : ""} `}>
              <div className="relative ">
                {" "}
                <button
                  className="focus:bg-blue  focus:px-2 focus:py-1/2 focus:text-light focus:rounded-lg"
                  onClick={() => {
                    setCategory("hoavai");
                    setIsDropped(true);
                  }}
                >
                  Hoa vải
                </button>
                {isDropped && category == "hoavai" && (
                  <div className="absolute z-50 bg-[#ffffff] font-500 w-[100px] right-0 p-2">
                    <ul className="text-center">
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoavai"
                        >
                          Tất cả{" "}
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoavai/450"
                        >
                          Từ 100k -{">"} 450k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoavai/950"
                        >
                          Từ 500k -{">"} 950k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoavai/2000"
                        >
                          Từ 1000k -{">"} 2000k
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className={`${name == "huyhieu" ? "font-600" : ""} `}>
              <div className="relative">
                {" "}
                <button
                  className="focus:bg-blue z-50 focus:px-2 focus:py-1/2 focus:text-light focus:rounded-lg"
                  onClick={() => {
                    setCategory("huyhieu");
                    setIsDropped(true);
                  }}
                >
                  Huy hiệu
                </button>
                {isDropped && category == "huyhieu" && (
                  <div className="absolute z-50 bg-[#ffffff] font-500 w-[100px] right-0 p-2">
                    <ul className="text-center">
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/huyhieu"
                        >
                          Tất cả{" "}
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/huyhieu/450"
                        >
                          Từ 100k -{">"} 450k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/huyhieu/950"
                        >
                          Từ 500k -{">"} 950k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/huyhieu/2000"
                        >
                          Từ 1000k -{">"} 2000k
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className={`${name == "hoatai" ? "font-600" : ""} `}>
              <div className="relative">
                {" "}
                <button
                  className="focus:bg-blue z-50 focus:px-2 focus:py-1/2 focus:text-light focus:rounded-lg"
                  onClick={() => {
                    setCategory("hoatai");
                    setIsDropped(true);
                  }}
                >
                  Hoa tai
                </button>
                {isDropped && category == "hoatai" && (
                  <div className="absolute z-50 bg-[#ffffff] font-500 w-[100px] right-0 p-2">
                    <ul className="text-center">
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoatai"
                        >
                          Tất cả{" "}
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoatai/450"
                        >
                          Từ 100k -{">"} 450k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoatai/950"
                        >
                          Từ 500k -{">"} 950k
                        </Link>
                      </li>
                      <li className="bg-light2 my-1 p-1 rounded-lg">
                        <Link
                          onClick={() => {
                            setCurrentPage(1);
                            if (isDropped) {
                              setIsDropped(false);
                            }
                          }}
                          to="/products/hoatai/2000"
                        >
                          Từ 1000k -{">"} 2000k
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            {/* <li>
              <div>
                <button
                  onClick={() => {
                    setCategory("doda");
                  }}
                >
                  Đồ da
                </button>
              </div>
              
            </li> */}
          </ul>

          {/* <p className="text-headline6 font-500 my-5 ">Mức giá</p> */}
          {/* <ul>
            <li>
              <button
                className="font-300 text-body2 mb-2"
                onClick={() => {
                  setPriceLevel(300000);
                }}
              >
                Dưới 300.000 VNĐ
              </button>
            </li>
            <li>
              <button
                className="font-300 text-body2"
                onClick={() => {
                  setPriceLevel(500000);
                }}
              >
                Dưới 500.000 VNĐ
              </button>
            </li>
            {priceLevel && (
              <div className="flex my-5 gap-2 items-center">
                <div className="bg-light2 text-dark text-body2 font-600 px-2.5 py-0.5 rounded-lg">
                  <h1>{priceLevel}</h1>
                </div>
                <RiDeleteBack2Fill
                  className="text-red cursor-pointer text-headline6"
                  onClick={() => {
                    setPriceLevel(null);
                  }}
                />
              </div>
            )}
          </ul> */}
        </div>
        <div className="basis-10/12">
          <h1 className="font-600 text-headline4">Danh sách sản phẩm</h1>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/production%20Collection%2Flogin%20background.jpg?alt=media&token=42df3223-029a-4c9d-8887-ab1086c21c7d"
            className="w-full h-[200px] object-cover object-top"
            alt=""
          /> */}
          {filteredProducts && (
            <div className="flex justify-center items-center">
              <p className="text-caption font-300 my-1">
                Tìm thấy {filteredProducts.length} kết quả
              </p>
            </div>
          )}
          {isPending && <Loading />}
          {filteredProducts && (
            <Pagination
              items={filteredProducts}
              user={user}
              itemsCount={filteredProducts.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              priceLevel={priceLevel}
            />
          )}
          {/* <div className="grid grid-cols-2 lg:grid-cols-3  gap-5">
            {filteredProducts &&
              user &&
              user.email == "baopowerpoint@gmail.com" &&
              filteredProducts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/products/${post.category}/${post.id}`}
                  className=""
                >
                  <motion.div
                    variants={imageMotion((idx + 12) * 0.1, 0.5, "linear")}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full shadow-sm"
                  >
                    <LazyLoad offsetBottom={200}>
                      <img
                        src={post.imgUrls[0]}
                        alt=""
                        className="w-[170px] lg:w-[200px] lg:h-[200px] h-[170px] object-cover "
                      />
                    </LazyLoad>

                 
                    <div className="text-center m-5">
                      <p className="text-body2">{post.title}</p>
                      <p className="font-500 text-body1 ">
                        {post.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        VNĐ
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Collection;

import React from "react";
import Footer from "../components/Footer";
import ProductCollection from "../components/ProductCollection";
const Products = () => {
  return (
    <div>
      <div className="px-5 mx-auto my-5 max-w-[800px] ">
        <ProductCollection />
      </div>
      <Footer />
    </div>
  );
};

export default Products;

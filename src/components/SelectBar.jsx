import React from "react";

const SelectBar = () => {
  return (
    <div className="flex justify-center gap-5 my-5">
      <div className="mb-3 w-2/3">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="">Các sản phẩm nổi bật</option>
          <option value="dinhket">Đính kết</option>
          <option value="hoavai">Hoa vải</option>
          <option value="doda">Đồ da</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBar;

import React from "react";

const UserTable = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b-[1px]">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    Tên
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-center font-medium text-dark2 px-6 py-4 "
                  >
                    Online
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    Trạng thái thanh toán
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    Ngày thanh toán
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-dark2 px-6 py-4 text-left"
                  >
                    Phát hiện download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[1px]">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark2">
                    1
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    Bảo
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    baopowerpoint@gmail.com
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green rounded-full mx-auto"></div>
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    Chưa thanh toán
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    <button>15/06/2022</button>
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red text-light font-500 rounded-full">
                      ! Cảnh báo
                    </span>
                  </td>
                  <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                    <button className="bg-blue text-light px-3 py-1/2 rounded-md">
                      Mở khoá
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

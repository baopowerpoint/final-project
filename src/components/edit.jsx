import React from "react";

function edit() {
  return (
    <div>
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
          {lectures &&
            lectures.map((user, idx) => (
              <tr key={idx} className="border-b-[1px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark2">
                  {idx + 1}
                </td>
                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  {user.displayName}
                </td>
                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  <div
                    className={`w-3 h-3 ${
                      user.isOnline ? "bg-green" : "bg-med"
                    } rounded-full mx-auto`}
                  ></div>
                </td>
                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  {user.isPurchased ? "Đã thanh toán" : "Chưa thanh toán"}
                </td>

                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  <button>
                    {user.isPurchased ? "10/10/2010" : "Chưa thanh toán"}
                  </button>
                </td>

                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red text-light font-500 rounded-full">
                    ! Cảnh báo
                  </span>
                </td>
                <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      handleUnlock(user.id);
                    }}
                    className="bg-blue text-light px-3 py-1/2 rounded-md"
                  >
                    Mở khoá
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default edit;

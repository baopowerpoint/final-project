import React from "react";
import { useState, useEffect } from "react";

import { db } from "../firebase/firebaseConfig";
import { useUpdateDoc } from "../hooks/useUpdateDoc";
import { MdOutlineAdd, MdOutlineDeleteOutline } from "react-icons/md";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

import { useCollection } from "../hooks/useCollection";

const UserTable = () => {
  const { documents: users } = useCollection("users");

  const { updateDocument, error, isPending } = useUpdateDoc();
  const [list, setList] = useState(null);

  const handleUnlock = (id) => {
    updateDocument(id);
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  const handleAddName = async (id) => {
    const fullName = prompt();
    await updateDoc(doc(db, "users", id), {
      fullName: fullName,
    });
  };
  useEffect(() => {
    if (users) {
      const sortedList = users.sort((a, b) => a.email.localeCompare(b.email));
      setList(sortedList);
    }
  }, [users]);

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
                    Số thiết bị
                  </th>
                </tr>
              </thead>
              <tbody>
                {list &&
                  list.map((user, idx) => (
                    <tr key={idx} className="border-b-[1px]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark2">
                        {idx + 1}
                      </td>
                      <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                        {user.displayName}
                      </td>
                      <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                        <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => {
                              handleAddName(user.id);
                            }}
                            className="bg-blue text-light px-3 py-1/2 rounded-md"
                          >
                            add
                          </button>
                        </td>
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
                        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold  text-dark font-500 rounded-full">
                          {JSON.stringify(user.ip)}
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
                      <td className="text-sm text-dark2 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            handleDelete(user.id);
                          }}
                          className="bg-red text-light px-3 py-1/2 rounded-md"
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

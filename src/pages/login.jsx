import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Loading from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="block mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Nhập email"
          />
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Mật khẩu
          </label>
          <input
            type="password"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Mật khẩu"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label className="form-check-label inline-block text-gray-800">
              Nhớ mật khẩu
            </label>
          </div>
        </div>
        {!isPending && (
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue
      text-light
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Đăng nhập
          </button>
        )}
        {isPending && (
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue
      text-light
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            disabled
          >
            <Loading />
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;

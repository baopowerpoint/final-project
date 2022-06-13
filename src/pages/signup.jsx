import React from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };
  return (
    <div className="block p-6 rounded-lg shadow-lg mx-auto bg-white max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            bg-white bg-clip-padding
            border border-solid border-med
            rounded
            m-0
            focus:outline-none"
              placeholder="Họ"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            bg-white bg-clip-padding
            border border-solid border-med
            rounded
            m-0
            focus:outline-none"
              placeholder="Tên"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
          w-full
          px-3
          py-1.5
          bg-white bg-clip-padding
          border border-solid border-med
          rounded
          m-0
          focus:outline-none"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="password"
            className="form-control block
          w-full
          px-3
          py-1.5
         
          bg-white bg-clip-padding
          border border-solid border-med
          rounded
          
          m-0
           focus:outline-none"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
            Sign up
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

export default Signup;

import React, { useState } from "react";
import BackgroundImage from "../Images/BackgroundImage.avif";
import { useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";

const Login = () => {
  const [user, setUser] = useState({
    id: "",
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    UserService.loginUser(user)
      .then((response) => {
        navigate("/EmployList");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex max-w-2xl mx-auto shadow border-b mt-20 bg-slate-50 rounded">
        <div className="px-8 py-8">
          <div className=" max-w-md mx-auto font-semibold  text-slate-600 text-2xl tracking-wider text-center">
            <h1>Login Account</h1>
          </div>

          <div className="items-center justify-center h-14 w-full mt-8 ">
            <label className="block text-gray-600 text-sm font-normal ">
              Email
            </label>
            <input
              type="email"
              name="emailId"
              value={user.emailId}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2 focus:outline-none focus:ring focus:border-blue-500 rounded"
              placeholder="Enter the email id e.g example@gmail.com"
            ></input>
          </div>
          <div className="items-center justify-center h-14 w-full mt-8">
            <label className="block text-gray-600 text-sm font-normal">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2 focus:outline-none focus:ring focus:border-blue-500 rounded"
              placeholder="Enter the password"
            ></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 mt-8">
            <button
              onClick={loginUser}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 w-full"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

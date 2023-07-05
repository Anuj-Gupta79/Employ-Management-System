import React, { useState } from "react";
import BackgroundImage from "../Images/BackgroundImage.avif";
import { useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    name: "",
    emailId: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    UserService.saveUser(user)
      .then((response) => {
        console.log(response.data);
        navigate("/");
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
            <h1>Create Account</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4 ">
            <label className="block text-gray-600 text-sm font-normal">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2 focus:outline-none focus:ring focus:border-blue-500 rounded"
              placeholder="Enter the name"
            ></input>
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
          <div className="items-center justify-center h-14 w-full mt-8">
            <label className="block text-gray-600 text-sm font-normal">
              Select Role:
            </label>
            <select
              className="px-4 py-2 mt-2 border border-gray-300 rounded w-full text-gray-600 focus:outline-none focus:ring focus:border-blue-500 cursor-pointer"
              name="role"
              value={user.role}
              onChange={handleChange}
            >
              <option value="" >Select</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 mt-8">
            <button
              onClick={saveUser}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 w-full"
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

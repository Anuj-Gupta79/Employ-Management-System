import React from "react";
import BackgroundImage from "../Images/BackgroundImage.avif";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="max-w-md mx-auto bg-slate-900 bg-opacity-50 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-white font-bold mb-4">
          Welcome to Our Employee Management System
        </h1>
        <p className="text-white mb-8">
          Streamline HR processes, track employee performance, and improve
          productivity with our powerful employee management platform.
        </p>
        <div className="flex space-x-5">
        
          <button onClick={()=>navigate('/login')} className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-block">
            Employee Login
          </button>
          <h6 className="text-white text-center py-1 font-semibold"> Or </h6>
          <button onClick={()=>navigate('/login')} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded inline-block">
            Admin Login
          </button>
        </div>
        <div className="text-white mt-6 flex">
          Haven't an account?
          <p className="text-blue-500 px-2 cursor-pointer" onClick={() => navigate('/signup')}>create account</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

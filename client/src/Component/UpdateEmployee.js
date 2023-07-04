import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const UpdateEmployee = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: params.id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [employee.id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, employee.id)
      .then((response) => {
        console.log("After the updating function : " , response.data);
        navigate("/EmployList");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b mt-20 bg-slate-50">
      <div className="pl-20 py-10">
        <div className="text-2xl tracking-wider font-semibold text-slate-600">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-9">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full mt-8">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full mt-8">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 mt-8">
          <button
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={(e) => navigate("/EmployList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;

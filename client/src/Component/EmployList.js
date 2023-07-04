/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";
import Employ from "./Employ";

const EmployList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employ, setEmploy] = useState(null);

  useEffect(() => {
    const fetchEmploy = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmploy();
        setEmploy(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchEmploy();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employ) {
        setEmploy((prevEmploy) => {
          return prevEmploy.filter((emp) => emp.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12 flex space-x-1">
        <div className="rounded text-center bg-slate-800 text-white px-6 py-3  w-full font-semibold">
          Employee List
        </div>
        <button
          data-tooltip-target="tooltip-animation"
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-500 text-white px-6 py-2 font-semibold hover:bg-slate-600"
        >
          Add
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-center font-medium text-gray-700 uppercase tracking-wider py-3 px-6 border-2">
                Id
              </th>
              <th className="text-center font-medium text-gray-700 uppercase tracking-wider py-3 px-6 border-2">
                First Name
              </th>
              <th className="text-center font-medium text-gray-700 uppercase tracking-wider py-3 px-6 border-2">
                Last Name
              </th>
              <th className="text-center font-medium text-gray-700 uppercase tracking-wider py-3 px-6 border-2">
                Email ID
              </th>
              <th className="text-center font-medium text-gray-700 uppercase tracking-wider py-3 px-6 border-2">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employ.map((employee) => (
                <Employ
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                ></Employ>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployList;

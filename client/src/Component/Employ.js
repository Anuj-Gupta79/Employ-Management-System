/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Employ = ({ employee, deleteEmployee }) => {
  return (
    <tr key={employee.id}>
      <td className="text-center px-6 py-4 whitespace-nowrap border-x-2">
        <div className="text-sm text-gray-500">{employee.id}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap border-x-2">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap border-x-2">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap border-x-2">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm border-x-2">
        <a
          // onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employ;

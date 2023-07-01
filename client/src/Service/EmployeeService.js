import axios from "axios";

const BASE_URL = "http://localhost:8080/employ/create";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();

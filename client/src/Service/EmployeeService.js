import axios from "axios";

const BASE_URL = "http://localhost:8080/employ";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(BASE_URL + "/create", employee);
  }

  getEmploy(){
    return axios.get(BASE_URL + "/show");
  }

  deleteEmployee(id){
    return axios.delete(BASE_URL + "/delete/" + id);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();

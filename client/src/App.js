import "./App.css";
import AddEmployee from "./Component/AddEmployee";
import EmployList from "./Component/EmployList";
// import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./Component/UpdateEmployee";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AddEmployee" element={<AddEmployee />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/EmployList" element={<EmployList />}></Route>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

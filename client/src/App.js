import "./App.css";
import AddEmployee from "./Component/AddEmployee";
import EmployList from "./Component/EmployList";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./Component/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/AddEmployee" element={<AddEmployee />}></Route>
        <Route path="/" element={<EmployList />}></Route>
        <Route path="/EmployList" element={<EmployList />}></Route>
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

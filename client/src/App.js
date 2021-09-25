import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {

const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [country, setCountry] = useState("");
const [position, setPosition] = useState("");
const [salary, setSalary] = useState(0);

const [employeeList, setEmployeeList] = useState([]);

const addEmployee = () => {

 Axios.post("http://localhost:3001/create", { 
   name: name, 
   age: age,
   country: country,
   position: position,
   salary: salary
  }).then(() =>{
    console.log("success")
  });
};

const getEmployees = () => {
  Axios.get("http://localhost:3001/employees").then((response) => { 
  setEmployeeList(response.data);
});
}

  return (
    <div className="App">
      <div className="information">
      <label> Name:</label>
      <input type="text" onChange = {(event) => {
      setName(event.target.value);
      }}
      />
      <label> Age:</label>
      <input type="text" onChange = {(event) => {
      setAge(event.target.value);
      }}
      />
      <label> Country:</label>
      <input type="text" onChange = {(event) => {
      setCountry(event.target.value);
      }}
      />
      <label> Position:</label>
      <input type="text" onChange = {(event) => {
      setPosition(event.target.value);
      }}
      />
      <label> Salary (Year):</label>
      <input type="number"onChange = {(event) => {
      setSalary(event.target.value);
      }}
      />
      <button onClick={addEmployee}>Add Employee</button>
    </div>

    <div className="employees">
    <button onClick={getEmployees}>Show Employees</button>

      {employeeList.map((val, key) =>{
        return (
        <div className="employee">
          <h3>Name: {val.name}</h3>
          <h3>Age: {val.age}</h3>
          <h3>Country: {val.country}</h3>
          <h3>Position: {val.position}</h3>
          <h3>Salary: {val.salary}</h3>
          </div>
        );
      })}
    </div>
    </div>

  );
}

export default App;

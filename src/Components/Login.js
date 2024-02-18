import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // New state for dropdown

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
   // console.log('Selected choice ', value);
  };

  const handleLogin = () => {
    const data = {
      EmployeeId: employeeId,
      Password: password,
      SelectedOption: selectedOption,
    };

    const url = 'https://localhost:44369/api/Test/Login';
    axios
      .post(url, data)
      .then((result) => {
        // Handle successful login (e.g., redirect to another page)
        alert(result.data);
        console.log('Selected Option:', selectedOption);
        switch (selectedOption) {
          case 'Employee':
            navigate('/dashboard');
            break;
          case 'HOD':
            navigate('/bar');
            break;
          case 'Admin':
            navigate('/pie');
            break;
          case 'QMD':
            navigate('/qmd-dashboard');
            break;
          //default:
           // navigate('/dashboard');
        }
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        alert(error);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container ll">
        <h2 className="heading h">Login</h2>

        <label className="label l" required>Employee Id</label>
        <input
          type="text"
          id="txtEmployeeId"
          placeholder="Enter Employee Id"
          className="input i"
          onChange={(e) => handleEmployeeIdChange(e.target.value)}
        />

        <label className="label l" required>Password</label>
        <input
          type="password"
          id="txtPassword"
          placeholder="Enter Password"
          className="input i"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />

        <label className="label" required>Select Your Role</label>
        <select
          id="dropdown"
          className="input"
          value={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
         <option disabled selected value="">Select an option</option>  
        <option value="Employee">Employee</option>
          <option value="HOD">HOD</option>
          <option value="QMD">QMD</option>
          <option value="Admin">Admin</option>
        </select>
 
        <button className="buttonb" onClick={() => handleLogin()}>
          Login
        </button>
        <div className="here">Don't have an account? <Link className='here' to='/register'>Register here</Link></div>
        
      
      </div>
    </Fragment>
  );
}

export default Login;



















/*import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // New state for dropdown

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleDropdownChange = (e) => {
    //setSelectedOption(value);
    const value = e.target.value;
  console.log('Selected Option:', value); // Log selected option
  setSelectedOption(value);
  };

  const handleLogin = () => {
    const data = {
      EmployeeId: employeeId,
      Password: password,
      SelectedOption: selectedOption,
    };

    const url = 'https://localhost:44369/api/Test/Login';
    axios
      .post(url, data)
      .then((result) => {
        // Handle successful login (e.g., redirect to another page)
        alert(result.data);
        console.log('Selected Option:', selectedOption);
        switch (selectedOption) {
          case 'Employee':
            navigate('/dashboard');
            break;
          case 'HOD':
            navigate('/bar');
            break;
          case 'Admin':
            navigate('/admin-dashboard');
            break;
          case 'QMD':
            navigate('/qmd-dashboard');
            break;
          //default:
           // navigate('/dashboard');
        }
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        alert(error);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container ll">
        <h2 className="heading h">Login</h2>

        <label className="label l">Employee Id</label>
        <input
          type="text"
          id="txtEmployeeId"
          placeholder="Enter Employee Id"
          className="input i"
          onChange={(e) => handleEmployeeIdChange(e.target.value)}
        />

        <label className="label l">Password</label>
        <input
          type="password"
          id="txtPassword"
          placeholder="Enter Password"
          className="input i"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />

        <label className="label l">Select Your Role</label>
        <select
          id="dropdown"
          className="input i"
          value={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
          <option value="Employee">Employee</option>
          <option value="HOD">Hod</option>
          <option value="Admin">Admin</option>
          <option value="QMD">QMD</option>
        </select>
  
        <button className="buttonb" onClick={() => handleLogin()}>
          Login
        </button>
        <div className="here">Don't have an account? <Link className='here' to="/register">Register here</Link></div>
        
      
      </div>
    </Fragment>
  );
}

export default Login;*/














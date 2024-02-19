import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    employeeId: '',
    password: '',
    selectedOption: '',
  });

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!employeeId) {
      isValid = false;
      errors.employeeId = 'Employee Id is required';
    }

    if (!password) {
      isValid = false;
      errors.password = 'Password is required';
    }

    if (!selectedOption) {
      isValid = false;
      errors.selectedOption = 'Select Your Role';
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      // If form is not valid, do not proceed with login
      return;
    }

    const data = {
      EmployeeId: employeeId,
      Password: password,
      SelectedOption: selectedOption,
    };

    const url = 'https://localhost:44369/api/Test/Login';
    axios
      .post(url, data)
      .then((result) => {
        if (result.data && result.data.ErrorMessage) {
          // Display the alert with the error message
          alert(result.data.ErrorMessage);
        } else {
          // Handle successful login based on role
          alert('Login successful');
          console.log('Selected Option:', selectedOption);
          switch (selectedOption.toUpperCase()) {
            case 'EMPLOYEE':
              // Redirect for Employee role
              navigate('/emp');
              break;
            case 'HOD':
              // Redirect for HOD role
              navigate('/bar');
              break;
            case 'ADMIN':
              // Redirect for Admin role
              navigate('/dashboard');
              break;
            case 'QMD':
              // Redirect for QMD role
              navigate('/pie');
              break;
            default:
              // Handle unknown role or add more cases for additional roles
              alert('Unknown role. Please contact support.');
          }
        }
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        console.error('An error occurred during login:', error);
        alert('An error occurred during login');
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container ll">
        <h2 className="heading h">Login</h2>

        <label className="label l">
          Employee Id<span className="required">*</span>:
        </label>
        <input
          type="text"
          id="txtEmployeeId"
          placeholder="Enter Employee Id"
          className="input i"
          onChange={(e) => handleEmployeeIdChange(e.target.value)}
        />
        <span className="error">{errorMessages.employeeId}</span>

        <label className="label l">
          Password<span className="required">*</span>:
        </label>
        <input
          type="password"
          id="txtPassword"
          placeholder="Enter Password"
          className="input i"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <span className="error">{errorMessages.password}</span>

        <label className="label">
          Select Your Role<span className="required">*</span>:
        </label>
        <select
          id="dropdown"
          className="input"
          value={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="EMPLOYEE">Employee</option>
          <option value="HOD">HOD</option>
          <option value="QMD">QMD</option>
          <option value="ADMIN">Admin</option>
        </select>
        <span className="error">{errorMessages.selectedOption}</span>

        <button className="buttonb" onClick={() => handleLogin()}>
          Login
        </button>
        <div className="here">
          Don't have an account?{' '}
          <Link className="here" to="/register">
            Register here
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;






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
*/

























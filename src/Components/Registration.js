import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    employeeId: '',
    password: '',
    reenteredPassword: '',
  });

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleReenteredPasswordChange = (value) => {
    setReenteredPassword(value);
  };

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!name) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!employeeId) {
      isValid = false;
      errors.employeeId = 'Employee Id is required';
    }

    if (!password) {
      isValid = false;
      errors.password = 'Password is required';
    }

    if (!reenteredPassword || reenteredPassword !== password) {
      isValid = false;
      errors.reenteredPassword = 'Passwords do not match';
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleSave = () => {
    if (!validateForm()) {
      // If form is not valid, do not proceed with saving
      return;
    }

    const data = {
      Name: name,
      EmployeeId: employeeId,
      Password: password,
      ReenteredPassword: reenteredPassword,
      SelectedOption: selectedOption,
    };

    const url = 'https://localhost:44369/api/Test/Registration';
    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Fragment>
      <div className="container ll">
        <h2 className="heading h">Registration</h2>
        <div className="label ipfields">
          <label className="label l">
            Employee Name<span className="required">*</span>:
          </label>
          <input
            type="text"
            id="txtName"
            placeholder="Enter Your Name"
            className="input i"
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <span className="error">{errorMessages.name}</span>

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

          <label className="label l">
            Re-enter Password<span className="required">*</span>:
          </label>
          <input
            type="password"
            id="re-enterPassword"
            placeholder="Re-enter Password"
            className="input i"
            onChange={(e) => handleReenteredPasswordChange(e.target.value)}
          />
          <span className="error">{errorMessages.reenteredPassword}</span>

          <label className="label l">Select Your Role:</label>
          <select
            id="dropdown"
            className="input custom-dropdown"
            value={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Employee">Employee</option>
            <option value="HOD">HOD</option>
            <option value="QMD">QMD</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button className="buttonb" onClick={() => handleSave()}>
          Register
        </button>
        <div className="here">
          Already have an account?{' '}
          <Link className="here" to="/login">
            Login here
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Registration;






/*import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


function Registration() {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('Option 1'); // New state for dropdown

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleReenteredPasswordChange = (value) => {
    setReenteredPassword(value);
  };

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  const handleSave = () => {
    const data = {
      Name: name,
      EmployeeId: employeeId,
      Password: password,
      ReenteredPassword: reenteredPassword,
      SelectedOption: selectedOption,
      //IsActive: 1,
    };

    const url = 'https://localhost:44369/api/Test/Registration';
    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Fragment>
      
      <div className="container ll">
        <h2 className="heading h">Registration</h2>

<div className="label ipfields">
        <label className="label l">Employee Name :</label>
        <input
          type="text"
          id="txtName"
          placeholder="Enter Your Name"
          className="input i"
          required
          onChange={(e) => handleNameChange(e.target.value)}
        />

        <label className="label l" required>Employee Id :</label>
        <input
          type="text"
          id="txtEmployeeId"
          placeholder="Enter Employee Id"
          className="input i"
          onChange={(e) => handleEmployeeIdChange(e.target.value)}
        />

        <label className="label l" required>Password :</label>
        <input
          type="password"
          id="txtPassword"
          placeholder="Enter Password"
          className="input i"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />

        <label className="label l" required>Re-enter Password :</label>
        <input
          type="password"
          id="re-enterPassword"
          placeholder="Re-enter Password"
          className="input i"
          onChange={(e) => handleReenteredPasswordChange(e.target.value)}
        />

        <label className="label l" required>Select Your Role :</label>
        <select
          id="dropdown"          
          className="input custom-dropdown"
          value={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
          //defaultValue="Select"
        >
          
         <option disabled selected value="">Select your choice</option>  
          <option value="Employee">Employee</option>
          <option value="HOD">Hod</option>
          <option value="Admin">Admin</option>
          <option value="QMD">QMD</option>
         
        </select>

        
        </div>


        <button className="buttonb" onClick={() => handleSave()}>
          Register
        </button>
        <div className="here">Already have an account? <Link className='here' to="/login">Login here</Link></div>        
      </div>
    </Fragment>
  );
}

export default Registration;*/








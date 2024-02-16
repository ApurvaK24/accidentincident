import React, { Fragment, useState } from 'react';
import axios from 'axios';


function Login() {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('Employee'); // New state for dropdown

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleDropdownChange = (value) => {
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
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        alert(error);
      });
  };

  return (
    <Fragment>
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
          <option value="Option 1">Employee</option>
          <option value="Option 2">Hod</option>
          <option value="Option 3">Admin</option>
          <option value="Option 3">QMD</option>
        </select>
  
        <button className="buttonb" onClick={() => handleLogin()}>
          Login
        </button>
        <div className="here">Don't have an account? <u className='here'>Register here</u></div>
        
      
      </div>
    </Fragment>
  );
}

export default Login;















/*import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
//import './Login.css'; // Import the CSS file

function Login() {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  //const [selectedOption, setSelectedOption] = useState('Role 1'); // New state for dropdown

  const handleEmployeeIdChange = (value) => {
    setEmployeeId(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  /*const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };*/

/*  const handleLogin = () => {
    const data = {
      EmployeeId: employeeId,
      Password: password,
      //SelectedOption: selectedOption,
    };

    const url = 'https://localhost:44369/api/Test/Login';
    /*axios
      .post(url, data)
      .then((result) => {
        // Handle successful login (e.g., redirect to another page)
        alert(result.data);
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        alert(error);
      });*/

  /*    axios
      .post(url, data)
      .then((response) => {
        const { Message, Role } = response.data;
        console.log("Role received:", Role); // Debugging statement
        // Handle successful login
        //alert(Message); // You might want to remove this alert later

        // Redirect user based on role
        switch (Role) {
          case 'Employee':
            window.location.href = '/dashboard'; // Redirect to employee page
            break;
          case 'HOD':
            window.location.href = '/dashboard'; // Redirect to HOD page
            break;
          case 'Admin':
            window.location.href = '/admin'; // Redirect to admin page
            break;
          case 'QMD':
            window.location.href = '/qmd'; // Redirect to QMD page
            break;
          default:
            // Handle unknown role
            alert('Unknown role received');
        }
      })
      .catch((error) => {
        // Handle login error
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

        {/*<label className="label">Select Your Role</label>
        <select
          id="dropdown"
          className="input"
          value={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
          <option value="Role 1">Role 1</option>
          <option value="Role 2">Role 2</option>
          <option value="Role 3">Role 3</option>
        </select>
  */
   /*     <button className="buttonb " onClick={() => handleLogin()}>
        
          Login
        
        </button>
        <div className="here">Don't have an account? <Link className='here' to="/register">Register here</Link></div>
        
      
      </div>
      
   
    </Fragment>
  );
}

export default Login;*/

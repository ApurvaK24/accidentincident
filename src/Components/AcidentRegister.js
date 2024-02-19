/*import React, { useState } from 'react';
import axios from 'axios';

function AcidentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    phoneNumber: '',
    dateOfAcident: '',
    timeOfAcident: '',
    location: '',
    //policeNotified: false,
    aidentDetails: '',
    acidentfollowUpRecommendations: '',
    additionalNotes: '',
  });

  // ... handleChange and handleSubmit functions as provided previously ...
 /* const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };*/



  /*
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    // For checkbox inputs, use the checked property
    const inputValue = type === 'checkbox' ? checked : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };
  


 /* const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log('Form data:', formData);
  };*/

  
  
  
  /*const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('https://localhost:44352/api/Accident/SubmitReport', formData);
  
      console.log('Server response:', response);  // Log the entire response object
  
      // Check if the response data is not null or undefined before using it
      if (response.data !== null && response.data !== undefined) {
        alert(response.data);
        // You can handle the response as needed, maybe show a success message to the user
      } else {
        console.error('Error: Server response.data is null or undefined.');
        // Handle the case where the response is null or undefined
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error);
      // Handle errors, maybe show an error message to the user
    }
  };
  console.log('Formatted value for dateOfAccident:', formData.dateOfAccident);
console.log('Formatted value for timeOfAccident:', formData.timeOfAccident);


  return (
    <div className="Acident-report">
        <div className='header'>
            <h1>Employee Acident Report</h1>
        </div>
        <br></br><br></br>
      

      <form onSubmit={handleSubmit}>
       


        
        <fieldset className="employee-details">
        
          <legend>Employee Details</legend>
          
          <label htmlFor="name">Name:</label>
          <div style={{ marginRight: '13px' }}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /> </div>
<br></br>

        <div style={{ display: 'flex' }}>
        <div style={{ marginTop: '10px' }}>
        <label htmlFor="department">Department:</label> </div>
          <input
            type="text"
            id="department"
            department="department"
            value={formData.department}
            onChange={handleChange}
          />
        <div style={{ marginTop: '10px' , marginLeft: '10px' }}><label  htmlFor="phoneNumber">PhoneNo:</label></div>
        
          <input
            type="text"
            id="phoneNumber"
            phoneNumber="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

        </div>
        </fieldset>




    
        <fieldset className="description-of-Acident">
          <legend>Description of Acident</legend>
          
    <div style={{ display: 'flex' }}>
          <div>

          <label htmlFor="dateOfAcident">Date:</label>
          <input
            type="date"
            id="dateOfAcident"
            name="dateOfAcident"
            value={formData.dateOfAcident}
            onChange={handleChange}
          />
          
          

          <label htmlFor="timeOfAcident">Time:</label>
          <input
            type="time"
            id="timeOfAcident"
            name="timeOfAcident"
            value={formData.timeOfAcident}
            onChange={handleChange}
          />
          

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />


          

          
          </div>


          <div style={{ paddingLeft:'15px' ,marginTop: '10px' , marginLeft: '10px' }}>
          <label htmlFor="AcidentDetails">Acident Details:</label> </div>
          <textarea
            id="AcidentDetails"
            name="AcidentDetails"
            value={formData.AcidentDetails}
            onChange={handleChange}
          />
          </div>
        </fieldset>




        <div style={{ display: 'flex' }}>
        <div style={{ paddingLeft:'0px' ,marginTop: '10px' , marginLeft: '0px' }}>
        <fieldset className="Acident-causes"> 
        
          <legend>Acident Causes</legend>
          <textarea
          rows="2"
          cols="50"
            id="AcidentCauses"
            name="AcidentCauses"
            value={formData.AcidentCauses}
            onChange={handleChange}
          />
        </fieldset></div>

        <div style={{ paddingLeft:'0px' ,marginTop: '10px' , marginLeft: '100px' }}>
        <fieldset className="follow-up-recommendations">
          <legend>Follow Up Recommendations</legend>

          <textarea
          rows="2"
          cols="100"
            id="followUpRecommendations"
            name="followUpRecommendations"
            value={formData.followUpRecommendations}
            onChange={handleChange}
          />
        </fieldset></div>
</div>



        <fieldset className="additional-notes">
          <legend>Additional Notes</legend>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </fieldset>

        <button className='btn' type="submit">Submit Report</button>
      </form>

      
    </div>
  );
}

export default AcidentRegister;
*/

import React, { useState } from 'react';
import axios from 'axios';
//import './AcidentRegister.css'; // Import the CSS file

function AcidentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    phoneNumber: '',
    dateOfAcident: '',
    timeOfAcident: '',
    location: '',
    //policeNotified: false,
    accidentDetails: '',
    accidentCauses: '',
    followUpRecommendations: '',
    additionalNotes: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    // For checkbox inputs, use the checked property
    const inputValue = type === 'checkbox' ? checked : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('https://localhost:44369/api/Accident/SubmitReport', formData);
  
      console.log('Server response:', response);  // Log the entire response object
  
      // Check if the response data is not null or undefined before using it
      if (response.data !== null && response.data !== undefined) {
        alert(response.data);
        // You can handle the response as needed, maybe show a success message to the user
      } else {
        console.error('Error: Server response.data is null or undefined.');
        // Handle the case where the response is null or undefined
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error);
      // Handle errors, maybe show an error message to the user
    }
  };
  console.log('Formatted value for dateOfAccident:', formData.dateOfAccident);
console.log('Formatted value for timeOfAccident:', formData.timeOfAccident);


  return (
    <div className="Acident-report">
      <div className='header'>
        <h1>Employee Accident Report</h1>
      </div>
      <br></br><br></br>

      <form onSubmit={handleSubmit}>
        <fieldset className="employee-details">
          <legend>Employee Details</legend>
          <label htmlFor="name">Name:</label>
          <div style={{ marginRight: '13px' }}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <br></br>

          <div style={{ display: 'flex' }}>
            <div style={{ marginTop: '10px' }}>
              <label htmlFor="department">Department:</label>
            </div>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
              <label htmlFor="phoneNumber">PhoneNo:</label>
            </div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset className="description-of-Acident">
          <legend>Description of Accident</legend>
          <div style={{ display: 'flex' }}>
            <div>
            <label htmlFor="dateOfAccident">Date:</label>
<input
  type="date"
  id="dateOfAccident"
  name="dateOfAccident" 
   /* Make sure the name matches */
  value={formData.dateOfAccident}
  onChange={handleChange}
/>

<label htmlFor="timeOfAccident">Time:</label>
<input
  type="time"
  id="timeOfAccident"
  name="timeOfAccident"  /* Make sure the name matches */
  value={formData.timeOfAccident}
  onChange={handleChange}
/>

              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div style={{ paddingLeft: '15px', marginTop: '10px', marginLeft: '10px' }}>
              <label htmlFor="accidentDetails">Accident Details:</label>
            </div>
            <textarea
              id="accidentDetails"
              name="accidentDetails"
              value={formData.accidentDetails}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <div style={{ display: 'flex' }}>
          <div style={{ paddingLeft: '0px', marginTop: '10px', marginLeft: '0px' }}>
            <fieldset className="Accident-causes">
              <legend>Accident Causes</legend>
              <textarea
                rows="2"
                cols="50"
                id="accidentCauses"
                name="accidentCauses"
                value={formData.accidentCauses}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div style={{ paddingLeft: '0px', marginTop: '10px', marginLeft: '100px' }}>
            <fieldset className="follow-up-recommendations">
              <legend>Follow Up Recommendations</legend>
              <textarea
                rows="2"
                cols="100"
                id="followUpRecommendations"
                name="followUpRecommendations"
                value={formData.followUpRecommendations}
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>

        <fieldset className="additional-notes">
          <legend>Additional Notes</legend>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </fieldset>

        <button className='btn' type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default AcidentRegister;
import React, { useState } from 'react';
import axios from 'axios';
//import './AcidentRegister.css'; // Import the CSS file

function IncidentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    phoneNumber: '',
    dateOfIncident: '',
    timeOfIncident: '',
    location: '',
    policeNotified: false,
    incidentDetails: '',
    incidentCauses: '',
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
      const response = await axios.post('https://localhost:44369/api/Incident/SubmitReport', formData);
  
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
  console.log('Formatted value for dateOfIncident:', formData.dateOfIncident);
console.log('Formatted value for timeOfIncident:', formData.timeOfIncident);


  return (
    <div className="Acident-report">
      <div className='header'>
        <h1>Employee Incident Report</h1>
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
          <legend>Description of Incident</legend>
          <div style={{ display: 'flex' }}>
            <div>
            <label htmlFor="dateOfIncident">Date:</label>
<input
  type="date"
  id="dateOfIncident"
  name="dateOfIncident" 
   /* Make sure the name matches */
  value={formData.dateOfIncident}
  onChange={handleChange}
/>

<label htmlFor="timeOfIncident">Time:</label>
<input
  type="time"
  id="timeOfIncident"
  name="timeOfIncident"  /* Make sure the name matches */
  value={formData.timeOfIncident}
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
<div style={{display:'flex'}}> 
<label htmlFor="policeNotified">Police Notified:</label>
          
          <input
          type="checkbox"
          id="policeNotified"
          name="policeNotified"
          checked={formData.policeNotified}
          onChange={handleChange}
        />



</div>

            </div>

            


            <div style={{ paddingLeft: '15px', marginTop: '10px', marginLeft: '10px' }}>
              <label htmlFor="incidentDetails">Incident Details:</label>
            </div>
            <textarea
              id="incidentDetails"
              name="incidentDetails"
              value={formData.incidentDetails}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <div style={{ display: 'flex' }}>
          <div style={{ paddingLeft: '0px', marginTop: '10px', marginLeft: '0px' }}>
            <fieldset className="Accident-causes">
              <legend>Incident Causes</legend>
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

export default IncidentRegister;
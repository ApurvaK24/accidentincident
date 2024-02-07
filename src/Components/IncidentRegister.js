import React, { useState } from 'react';
//import './IncidentRegister.css'; // Import the CSS file
import {Link} from 'react-router-dom'
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

  // ... handleChange and handleSubmit functions as provided previously ...
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log('Form data:', formData);
  };
  return (
    <div className="incident-report">
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




    
        <fieldset className="description-of-incident">
          <legend>Description of Incident</legend>
          
    <div style={{ display: 'flex' }}>
          <div>

          <label htmlFor="dateOfIncident">Date:</label>
          <input
            type="date"
            id="dateOfIncident"
            name="dateOfIncident"
            value={formData.dateOfIncident}
            onChange={handleChange}
          />
          
          

          <label htmlFor="timeOfIncident">Time:</label>
          <input
            type="time"
            id="timeOfIncident"
            name="timeOfIncident"
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


          {/*<label htmlFor="policeNotified">Police Notified:</label>
          
            <input
            type="checkbox"
            id="policeNotified"
            name="policeNotified"
            checked={formData.policeNotified}
            onChange={handleChange}
          />

          <input
            type="radio"
            id="policeNotified"
            name="policeNotified"
            checked={formData.policeNotified}
            onChange={handleChange}
          />

          */}
          </div>


          <div style={{ paddingLeft:'15px' ,marginTop: '10px' , marginLeft: '10px' }}>
          <label htmlFor="incidentDetails">Incident Details:</label> </div>
          <textarea
            id="incidentDetails"
            name="incidentDetails"
            value={formData.incidentDetails}
            onChange={handleChange}
          />
          </div>
        </fieldset>




        <div style={{ display: 'flex' }}>
        <div style={{ paddingLeft:'0px' ,marginTop: '10px' , marginLeft: '0px' }}>
        <fieldset className="incident-causes"> 
        
          <legend>Incident Causes</legend>
          <textarea
          rows="2"
          cols="50"
            id="incidentCauses"
            name="incidentCauses"
            value={formData.incidentCauses}
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

export default IncidentRegister;

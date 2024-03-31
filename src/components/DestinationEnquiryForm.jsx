import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/bali.jpg'; // Import your background image

const DestinationEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // You can send the form data to an API, or handle it in any other way
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh', /* Full height of the viewport */
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Make sure the background image covers the entire container
      
    },
    formContainer: {
      padding: '4%', /* Adjust padding as needed */
      maxWidth: '600px', /* Fixed width for the form */
      width: '100%',
      backgroundColor: 'rgba(248, 249, 250, 0.4)', /* Add background color with transparency */
      borderRadius: '10px', /* Add border radius for rounded corners */
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', /* Add box shadow for depth */
    },
    title: {
      textAlign: 'center',
      color: 'gray',
      marginBottom: '10px',
    },
    form: {
      width: '100%',
    },
    textarea: {
      height: '100px', /* Adjust height of the textarea */
    },
    button: {
      width: '100%',
    }
  };

  return (
    <div style={styles.container}>
      <div className="destination-enquiry-form" style={styles.formContainer}>
        <h2 style={styles.title}>Destination Enquiry</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name<span style={{ color : '#FF0000', fontWeight: '600px', fontSize: '20px'}}>*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email<span style={{ color : '#FF0000', fontWeight: '600px', fontSize: '20px'}}>*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">Destination</label>
            <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message<span style={{ color : '#FF0000', fontWeight: '600px', fontSize: '20px'}}>*</span></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="form-control" style={styles.textarea}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );  
}

export default DestinationEnquiryForm;

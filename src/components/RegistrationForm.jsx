import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { registerlists } from '../Services/allApi';


function RegistrationForm() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    location:'',
    contact: '',
  })
  

  
  const [errors, setErrors] = useState({});

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.age || formData.age <= 0) newErrors.age = 'Valid age is required.';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required.';
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.contact.trim() || formData.contact.length !== 10)
      newErrors.contact = 'Valid 10-digit contact number is required.';
    return newErrors;
  };

 
  const handleSubmit =async (e) => {
    e.preventDefault(); 
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      const result =await registerlists (formData)
      console.log (result)
      alert(`Form submitted successfully! \nData: ${JSON.stringify(formData, null, 2)}`);
     
      setFormData({
        name: '',
        age: '',
        bloodGroup: '',
        location:'',
        contact: '',
      });
      handleCancel ()
    }
  };


  const handleCancel=()=>{
    setFormData({
        name: '',
        age: '',
        bloodGroup: '',
        location:'',
        contact: ''
    })
    handleClose()
  }
  
  

  return (
   <> 
   <Button onClick={handleShow} className="btn bg-transparent rounded-5 ms-md-3 my-2 my-md-0">
                Register as a Donor
              </Button>
   
    <Modal show={show} onHide={handleClose} animation={false}>
   <Modal.Header style={modalStyles.modalContent} closeButton>
   
   </Modal.Header>
   <Modal.Body style={modalStyles.modalContent}  >
   <div style={modalStyles.modalform} className="container mt-5 p-5 border rounded-3  shadow-lg">
      <h2 className="text-center text-danger fw-bold mb-4">Blood Donation Registration</h2>
      <form   onSubmit={handleSubmit}>
        
      
        <div  className="mb-3">
          <label  className="form-label fw-bold text-danger">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
          />
          {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
        </div>

       
        <div className="mb-3">
          <label className="form-label fw-bold text-danger">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your age"
          />
          {errors.age && <div className="text-danger mt-1">{errors.age}</div>}
        </div>

       
        <div className="mb-3">
          <label className="form-label fw-bold text-danger">Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select</option>
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
          {errors.bloodGroup && <div className="text-danger mt-1">{errors.bloodGroup}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-danger">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your location"
          />
          {errors.location && <div className="text-danger mt-1">{errors.location}</div>}
        </div>

     
        <div className="mb-3">
          <label className="form-label fw-bold text-danger">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your contact number"
          />
          {errors.contact && <div className="text-danger mt-1">{errors.contact}</div>}
        </div>

       
        <button type="submit" className="btn btn-danger w-100 fw-bold mt-3">
          Submit
        </button>
      </form>
    </div>

   </Modal.Body>
   <Modal.Footer style={modalStyles.modalContent}>
     <Button className='btn btn-danger' variant="secondary" onClick={handleCancel}>
       Close
     </Button>
     
   </Modal.Footer>
 </Modal>

 </>
  )
}

const modalStyles = {
  modalContent: {
    backgroundColor:'rgba(255, 0, 0, 0.5)', 
    color: 'white',
    
  },
  modalform: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  }
}


export default RegistrationForm
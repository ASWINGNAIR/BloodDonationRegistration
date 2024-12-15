import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { registerlists } from '../Services/allApi';


function RegistrationForm() {

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    location:'',
    contact: '',
  });
  console.log(formData);


  const handleCancel=()=>{
    setFormData({
      name: '',
      age: '',
      bloodGroup: '',
      location:'',
      contact: '',
    })
  }
  

  

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  
  const handleSubmit = async() => {
    const {name,age,bloodGroup,location,contact} = formData

    if(!name || !age || !bloodGroup || !location || !contact){
      alert('Please fill the form completely')
    }

    else{
      
      const result = await registerlists({name,age,bloodGroup,location,contact}) 
      console.log(result);

      if(result.status>=200 && result.status<300){
        alert('Registration completed successfully')
        handleClose()
      }
      else{
        alert('something went wrong')
        handleCancel()
      }
      
    }
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
            <form>


              <div className="mb-3">
                <label className="form-label fw-bold text-danger">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>


              <div className="mb-3">
                <label className="form-label fw-bold text-danger">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="form-control"
                  placeholder="Enter your age"
                />
              </div>


              <div className="mb-3">
                <label className="form-label fw-bold text-danger">Blood Group:</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  className="form-select"
                >
                  <option value="">Select</option>
                  {bloodGroups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold text-danger">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="form-control"
                  placeholder="Enter your location"
                />
              </div>


              <div className="mb-3">
                <label className="form-label fw-bold text-danger">Contact:</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="form-control"
                  placeholder="Enter your contact number"
                />
              </div>


              <button type="button" onClick={handleSubmit} className="btn btn-danger w-100 fw-bold mt-2">
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
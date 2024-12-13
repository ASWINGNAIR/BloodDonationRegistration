import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { donationlistApi } from '../Services/allApi';

function DonationForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);
    handleCancel()
  }

  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    contact: '',
    donationDate: '',
    location: ''
  });
  console.log(formData);
  
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const handleCancel=()=>{
    setFormData({
      name: '',
      age: '',
      gender: '',
      bloodGroup: '',
      contact: '',
      donationDate: '',
      location: ''
    })
  }  


  const handleSubmit =async() =>{
    const {name,age,gender,bloodGroup,contact,donationDate,location} =formData

    if(!name || !age || !gender || !bloodGroup || !contact || !donationDate || !location){
      alert('Fill the form completely')
    }
    else{
      const result = await donationlistApi({name,age,gender,bloodGroup,contact,donationDate,location})
      console.log(result);

      if(result.status>=200 && result.status<300){
        alert('added successfully')
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
        Donate Blood
      </Button>
      
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header style={modalStyles.modalContent} closeButton></Modal.Header>
        <Modal.Body style={modalStyles.modalContent}>
          <div style={modalStyles.modalform} className="container p-3 rounded-3 shadow-sm">
            <h5 className="text-center text-danger fw-bold mb-3">Blood Donation Form</h5>
            <form>
              <div className="mb-2">
                <label className="form-label text-danger">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e)=>setFormData({ ...formData,name:e.target.value})}
                  className="form-control form-control-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-2">
                <label className="form-label text-danger">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={(e)=>setFormData({ ...formData,age:e.target.value})}
                  className="form-control form-control-sm"
                  placeholder="Enter your age"
                />
              </div>

              <div className="mb-2">
                <label className="form-label text-danger">Gender:</label>
                <div className="form-check">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(e)=>setFormData({ ...formData,gender:e.target.value})}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(e)=>setFormData({ ...formData,gender:e.target.value})}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={(e)=>setFormData({ ...formData,gender:e.target.value})}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="other">Other</label>
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label text-danger">Blood Group:</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e)=>setFormData({ ...formData,bloodGroup:e.target.value})}
                  className="form-select form-select-sm"
                >
                  <option value="">Select</option>
                  {bloodGroups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                
              </div>

              <div className="mb-2">
                <label className="form-label text-danger">Contact:</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={(e)=>setFormData({ ...formData,contact:e.target.value})}
                  className="form-control form-control-sm"
                  placeholder="Enter your contact number"
                />
              </div>

              <div className="mb-2">
                <label className="form-label text-danger">Donation Date:</label>
                <input
                  type="date"
                  name="donationDate"
                  value={formData.donationDate}
                  onChange={(e)=>setFormData({ ...formData,donationDate:e.target.value})}
                  className="form-control form-control-sm"
                />
              </div>

              <div className="mb-2">
              <label className="form-label text-danger">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e)=>setFormData({ ...formData,location:e.target.value})}
                  className="form-control form-control-sm"
                  placeholder="Enter your contact location"
                />
              </div>

              <button type="button" onClick={handleSubmit} className="btn btn-danger w-100 fw-bold mt-2">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer style={modalStyles.modalContent}>
          <Button className="btn btn-danger btn-sm" variant="secondary" onClick={handleCancel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const modalStyles = {
  modalContent: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    color: 'white',
  },
  modalform: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '15px',
    maxWidth: '400px',
    margin: '0 auto',
  },
};

export default DonationForm;







// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function DonationForm() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     contact: '',
//     donationDate: '',
//     address: '',
//   });

//   const [errors, setErrors] = useState({});
//   const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required.';
//     if (!formData.age || formData.age <= 0) newErrors.age = 'Valid age is required.';
//     if (!formData.gender) newErrors.gender = 'Gender is required.';
//     if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required.';
//     if (!formData.contact.trim() || formData.contact.length !== 10)
//       newErrors.contact = 'Valid 10-digit contact number is required.';
//     if (!formData.donationDate) newErrors.donationDate = 'Donation date is required.';
//     if (!formData.address.trim()) newErrors.address = 'Address is required.';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validate();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       alert(`Form submitted successfully! \nData: ${JSON.stringify(formData, null, 2)}`);
//       setFormData({
//         name: '',
//         age: '',
//         gender: '',
//         bloodGroup: '',
//         contact: '',
//         donationDate: '',
//         address: '',
//       });
//     }
//   };

//   return (
//     <> 
//       <Button onClick={handleShow} className="btn bg-transparent rounded-5 ms-md-3 my-2 my-md-0">
//         Donate Blood
//       </Button>
      
//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header style={modalStyles.modalContent} closeButton></Modal.Header>
//         <Modal.Body style={modalStyles.modalContent}>
//           <div style={modalStyles.modalform} className="container p-3 rounded-3 shadow-sm">
//             <h5 className="text-center text-danger fw-bold mb-3">Blood Donation Form</h5>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-2">
//                 <label className="form-label text-danger">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="form-control form-control-sm"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Age:</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="form-control form-control-sm"
//                   placeholder="Enter your age"
//                 />
//                 {errors.age && <div className="text-danger mt-1">{errors.age}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Gender:</label>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     id="male"
//                     name="gender"
//                     value="Male"
//                     checked={formData.gender === "Male"}
//                     onChange={handleChange}
//                     className="form-check-input"
//                   />
//                   <label className="form-check-label" htmlFor="male">Male</label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     id="female"
//                     name="gender"
//                     value="Female"
//                     checked={formData.gender === "Female"}
//                     onChange={handleChange}
//                     className="form-check-input"
//                   />
//                   <label className="form-check-label" htmlFor="female">Female</label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     id="other"
//                     name="gender"
//                     value="Other"
//                     checked={formData.gender === "Other"}
//                     onChange={handleChange}
//                     className="form-check-input"
//                   />
//                   <label className="form-check-label" htmlFor="other">Other</label>
//                 </div>
//                 {errors.gender && <div className="text-danger mt-1">{errors.gender}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Blood Group:</label>
//                 <select
//                   name="bloodGroup"
//                   value={formData.bloodGroup}
//                   onChange={handleChange}
//                   className="form-select form-select-sm"
//                 >
//                   <option value="">Select</option>
//                   {bloodGroups.map((group, index) => (
//                     <option key={index} value={group}>
//                       {group}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.bloodGroup && <div className="text-danger mt-1">{errors.bloodGroup}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Contact:</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   className="form-control form-control-sm"
//                   placeholder="Enter your contact number"
//                 />
//                 {errors.contact && <div className="text-danger mt-1">{errors.contact}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Donation Date:</label>
//                 <input
//                   type="date"
//                   name="donationDate"
//                   value={formData.donationDate}
//                   onChange={handleChange}
//                   className="form-control form-control-sm"
//                 />
//                 {errors.donationDate && <div className="text-danger mt-1">{errors.donationDate}</div>}
//               </div>

//               <div className="mb-2">
//                 <label className="form-label text-danger">Address:</label>
//                 <textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="form-control form-control-sm"
//                   placeholder="Enter your address"
//                   rows="2"
//                 ></textarea>
//                 {errors.address && <div className="text-danger mt-1">{errors.address}</div>}
//               </div>

//               <button type="submit" className="btn btn-danger w-100 fw-bold mt-2">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </Modal.Body>
//         <Modal.Footer style={modalStyles.modalContent}>
//           <Button className="btn btn-danger btn-sm" variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// const modalStyles = {
//   modalContent: {
//     backgroundColor: 'rgba(255, 0, 0, 0.5)',
//     color: 'white',
//   },
//   modalform: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     padding: '15px',
//     maxWidth: '400px',
//     margin: '0 auto',
//   },
// };

// export default DonationForm;
import React, { useEffect, useState } from 'react';
import { deleteregister, registerlistered } from '../Services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function RegisteredList() {
  
   const [donation ,setDonation] =useState([])

   const [search,setSearch] = useState('')
   console.log(search);

   const [deleteregi, setDeleteregi] = useState([])
  
    const getAllDetails = async()=>{
      const result = await registerlistered()
        
      setDonation(result.data)
    }
    console.log(donation);

    const handleDelete = async (id) => {
      try {
        const result = await deleteregister(id);
        if (result.status >= 200 && result.status < 300) {
          alert("Successfully deleted");
        } else {
          alert("Try again");
        }
        setDeleteregi(result.data); 
      } catch (error) {
        console.error("Error deleting the item:", error);
        alert("Error deleting the item");
      }
    };
  
    
    useEffect(()=>{
      getAllDetails()
    },[deleteregi])

  return (
    <div className='pt-5 p-3'>
      <h1 className='text-danger text-center text-4xl mb-5 py-5 mt-4'>Registered List</h1>
      <div>

        <div className="position-relative ms-3 ">
                        <input
                          type="text"
                          placeholder="Find your blood group"
                          className="form-control bg-transparent text-black rounded-5 p-3 ps-5 border border-danger mb-5"
                          style={{ height: "45px",}}
                          onChange={(e)=>setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          className="position-absolute"
                          style={{
                            top: "50%",
                            left: "15px",
                            transform: "translateY(-50%)",
                            color: "black",
                          }}
                        />
                      </div>
      
        <table className='w-100 border border-secondary mb-5'>
          <thead>
            <tr className='text-center'>
              <th className='border border-secondary bg-danger text-white'>#</th>
              <th className='border border-secondary bg-danger text-white'>Name</th>
              <th className='border border-secondary bg-danger text-white'>Age</th>
              <th className='border border-secondary bg-danger text-white'>Blood Group</th>
              <th className='border border-secondary bg-danger text-white'>Location</th>
              <th className='border border-secondary bg-danger text-white'>Contact</th>
              <th className='border border-secondary bg-danger text-white'>Action</th>
            </tr>
          </thead>
          <tbody>
            {donation.length > 0 ? (
              donation.filter((item)=>{
                return search.toLowerCase() === '' ? item : item.bloodGroup.toLowerCase().includes(search)
              }).map((item, index) => (
                <tr key={item.id || index} className='text-center'>
                  <td className='border border-secondary'>{index + 1}</td>
                  <td className='border border-secondary'>{item?.name}</td>
                  <td className='border border-secondary'>{item?.age}</td>
                  <td className='border border-secondary'>{item?.bloodGroup}</td>
                  <td className='border border-secondary'>{item?.location}</td>
                  <td className='border border-secondary'>{item?.contact}</td>
                  <td className='border border-secondary text-danger' onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash}/></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredList;
import React, { useEffect, useState } from 'react';
import { registerlistered } from '../Services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function RegisteredList() {
  
   const [donation ,setDonation] =useState([])
  
    const getAllDetails = async()=>{
      const result = await registerlistered()
        
      setDonation(result.data)
    }
    console.log(donation);
    
    useEffect(()=>{
      getAllDetails()
    },[])

  return (
    <div className='pt-5'>
      <h1 className='text-danger text-center text-4xl mb-5 py-5 mt-4'>Registered List</h1>
      <div>
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
              donation.map((item, index) => (
                <tr key={item.id || index} className='text-center'>
                  <td className='border border-secondary'>{index + 1}</td>
                  <td className='border border-secondary'>{item?.name}</td>
                  <td className='border border-secondary'>{item?.age}</td>
                  <td className='border border-secondary'>{item?.bloodGroup}</td>
                  <td className='border border-secondary'>{item?.location}</td>
                  <td className='border border-secondary'>{item?.contact}</td>
                  <td className='border border-secondary text-danger'><FontAwesomeIcon icon={faTrash}/></td>
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
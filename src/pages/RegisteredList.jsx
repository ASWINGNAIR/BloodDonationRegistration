import React, { useEffect, useState } from 'react';
import { registerlistered } from '../Services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function RegisteredList() {
  const [RegisteredData, setRegisteredData] = useState([]);



  const fetchRegisteredData = async () => {
    try {
      const result = await registerlistered();
      console.log('Fetched data:', result); // Debug log
      setRegisteredData(result.data); // Access `result.data` if necessary
    } catch (error) {
      console.error('Error fetching registered data:', error);
    }
  };
  

  useEffect(() => {
    fetchRegisteredData()
  }, [RegisteredData]);

  return (
    <>
      <div className='pt-5'>
        <h1 className='text-danger text-center text-4xl mb-5 py-5'>Registered List</h1>
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
              {RegisteredData.length > 0 ? (
                RegisteredData.map((item, index) => (
                  <tr className='text-center' key={index}>
                    <td className='border border-secondary'>{index + 1}</td>
                    <td className='border border-secondary'>{item?.name}</td>
                    <td className='border border-secondary'>{item?.age}</td>
                    <td className='border border-secondary'>{item?.bloodgroup}</td>
                    <td className='border border-secondary'>{item?.location}</td> {/* Add this if needed */}
                    <td className='border border-secondary'>{item?.contact}</td>
                    <td className='border border-secondary'><FontAwesomeIcon icon={faTrash} style={{color: "#ad0101",}} /></td>
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
    </>
  );
}

export default RegisteredList;

import React, { useEffect, useState } from 'react'
import { getDonationlistApi } from '../Services/allApi'


function RegisteredList() {

  const [donation ,setDonation] =useState([])

  const getAllDetails = async()=>{
    const result = await getDonationlistApi()
      
    setDonation(result.data)
  }
  console.log(donation);
  
  useEffect(()=>{
    getAllDetails()
  },[])

  return (
    <>
      <div className='py-5 px-4'>
        <h1 className='text-danger text-center text-4xl mb-5 px-3  py-5'>Donated List</h1>
        { donation?.length>0?
          <div>
          <table className=' w-100 border border-secondary'>
            <thead>
              <tr className='text-center'>
                <th className='border border-secondary bg-danger text-white'>#</th>
                <th className='border border-secondary bg-danger text-white'>Name</th>
                <th className='border border-secondary bg-danger text-white'>Age</th>
                <th className='border border-secondary bg-danger text-white'>Blood Group</th>
                <th className='border border-secondary bg-danger text-white'>Location</th>
                <th className='border border-secondary bg-danger text-white'>Contact</th>
                <th className='border border-secondary bg-danger text-white'>Date of Donation</th>
              </tr>
            </thead>

            <tbody>
              {donation?.map((item , index)=>(
                <tr className='text-center'>
                <td className='border border-secondary'>{index+1}</td>
                <td className='border border-secondary'>{item?.name}</td>
                <td className='border border-secondary'>{item?.age}</td>
                <td className='border border-secondary'>{item?.bloodGroup}</td>
                <td className='border border-secondary'>{item?.location}</td>
                <td className='border border-secondary'>{item?.contact}</td>
                <td className='border border-secondary'>{item?.donationDate}</td>
              </tr>
              ))
                }
            </tbody>
          </table>
        </div>
          :
        <div>
        <h4 className='text-center text-danger'>No Donations done Yet..</h4>
        </div>}

      </div>
    </>
  )
}

export default RegisteredList
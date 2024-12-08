import React from 'react'

function RegisteredList() {
  return (
    <>
      <div className='py-5 px-4'>
        <h1 className='text-danger text-center text-4xl mb-5 px-3  py-5'>Donated List</h1>
        <div className=''>
          <table className=' w-100 border border-secondary'>
            <thead>
              <tr>
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
              <tr>
                <td className='border border-secondary'>1</td>
                <td className='border border-secondary'>Aswin</td>
                <td className='border border-secondary'>23</td>
                <td className='border border-secondary'>B+</td>
                <td className='border border-secondary'>Alappuzha</td>
                <td className='border border-secondary'>8976357289</td>
                <td className='border border-secondary'>15/11/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default RegisteredList
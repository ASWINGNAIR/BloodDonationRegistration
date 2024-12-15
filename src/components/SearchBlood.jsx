import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


function SearchBlood() {

    const [inpuData , setInputData] = useState({
        textEntered:""
    });
    console.log(inpuData);
    


    
  return (
    <>
        <div className="position-relative ms-3">
                <input
                  type="text"
                  placeholder="Find your blood group"
                  className="form-control bg-transparent text-white rounded-5 p-3 ps-5 border border-white"
                  style={{ height: "45px", }}
                  onChange={(e)=>setInputData({ textEntered:e.target.value})}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "15px",
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                />
              </div>
    </>
  )
}

export default SearchBlood
import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <> 
    <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-3">
          <div className='p-3 rounded  ' style={{ backgroundColor: "white", width: "350px" ,marginTop:"80px"}} >
              <div class="d-flex flex-column"> 
                <Link to={'/'} className='p-3 fs-5 fw-bold text-danger' style={{textDecoration:"none"}} >About Us</Link>
                <Link to={'/'} className='p-3 fs-5 fw-bold text-danger' style={{textDecoration:"none"}}>Blood Donation Facts</Link>
                <Link to={'/'} className='p-3 fs-5 fw-bold text-danger' style={{textDecoration:"none"}}>	Who can/ Can't Donate</Link>
              </div>

        </div>
      </div>
          </div>
          <div className="col-md-9">
            
          </div>
        </div>
    </>
  )
}

export default Home
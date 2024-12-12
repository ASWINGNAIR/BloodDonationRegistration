import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-5 px-4 shadow-lg'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
          <h4 className='text-danger py-2'><img src="https://t3.ftcdn.net/jpg/02/64/43/94/360_F_264439411_iBRpaJO6TS6IhU18qoXWfKutbi0xxSpV.jpg" alt="No Image" style={{width:"70px",height:"70px",marginRight:"50px"}} />HEART to HEART</h4>
            <p style={{textAlign:'justify'}} className='mt-2'>"HEART TO HEART" is an organization that brings voluntary blood donors and those in need of blood on to a common platform . Through this website , we seek donors who are willing to donate blood , as well as provide the timeliest support to those in frantic need of it .</p>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center py-4 ">
            <div>
              <h4 className='text-danger'>Links</h4>
              <Link to={'/'}><p className='mt-4'>Home Page</p></Link>
              <Link to={'/RegisteredList'}><p>RegList Page</p></Link>
              <Link to={'/DonatedList'}><p>DonatedList Page</p></Link>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center py-4">
            <div>
              <h4 className='text-danger'>Guides</h4>
              <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>

          <div className="col-md-4 px-md-5 mt-4 mt-md-0">
            <h4>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email Id' className='form-control border border-primary'/>
              <button className='btn btn-danger ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
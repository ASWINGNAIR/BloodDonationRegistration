import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <> 
      <div className="container-fluid p-4 bg-white">
        <div className="row" id='About'>
          <div className="col-md-3" >
            <div className='p-3 rounded shadow-lg d-none d-md-block' style={{ width: "350px", marginTop: "80px", position: "fixed", top: "80px", left: "20px"}} >
              <div class="d-flex flex-column">
                <a href="#About" className='p-3 fs-5 fw-bold text-danger' style={{ textDecoration: "none" }} >About Us</a>
                <a href="#facts" className='p-3 fs-5 fw-bold text-danger' style={{ textDecoration: "none" }}>Blood Donation Facts</a>
                <a href="#donors" className='p-3 fs-5 fw-bold text-danger' style={{ textDecoration: "none" }}>Who can/ Can't Donate</a>
              </div>
            </div> 
          </div>

          <div className="col-md-9">
            <div >
              <h1 className='text-center text-black' style={{ marginTop: "100px" }} >About Us</h1>
              <p className='px-5 fw-bold ' style={{ textAlign: "justify", lineHeight: '2' }}>Have  you  at  anytime  witnessed  a  relative  of  yours  or  a  close  friend  searching  frantically  for  a  blood  donor ,  when  blood  banks  say  out  of  stock ,  the  donors  in  mind  are  out  of  reach  and  the  time  keeps  ticking ?  Have  you  witnessed  loss  of  life  for  the  only  reason  that  a  donor  was  not  available  at  the  most  needed  hour ?  Is  it  something  that  we  as  a  society  can  do nothing  to  prevent ?  This  thought  laid  our  foundation .</p>
              <p className='px-5 fw-bold mt-4 ' style={{ textAlign: "justify", lineHeight: '2' }}>"HEART TO HEART"  is  an  organization  that  brings  voluntary  blood  donors  and  those  in  need  of  blood  on  to  a  common  platform .   Through  this  website ,  we  seek  donors  who  are  willing  to  donate  blood ,  as  well  as  provide  the  timeliest  support  to  those  in  frantic  need  of  it .</p>
              <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify", lineHeight: '2' }}><span className='fs-5 text-primary'>Our Mission</span> <br /> Our mission is to fulfill every blood request in the country with a promising web portal and motivated individuals who are willing to donate blood. <br />Connect: Bring together donors and recipients in an easy and efficient manner. <br />Empower: Equip individuals with the tools to make a difference in their communities. <br />Inspire: Foster awareness about the importance of blood donation and encourage people to become heroes in someone’s story.</p>
              <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify", lineHeight: '2' }}><span className='fs-5 text-primary'>Our Vision</span> <br />To create a world where no one has to wait for the gift of life. We envision a connected community of donors and recipients, united by the shared goal of saving lives and spreading kindness . </p>
              <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify", lineHeight: '2' }}><span className='fs-5 text-primary'>What We Offer</span> <br />Donor Registration: A simple and secure way for potential donors to sign up and join our lifesaving network. <br />Recipient Search: A user-friendly search feature for patients and families to find donors by blood group, location, or availability. <br />Transparency and Privacy: We prioritize the safety and privacy of all users on our platform.</p>
            </div>

            <div id='facts'>
            <h1  className='text-center text-black' style={{ marginTop: "80px" }}>Blood Donation Facts</h1>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Facts about blood needs</span> <br /><span className='fs-4'>.</span> Every year our nation requires about 5 Crore units of blood, out of which only a meager 2.5 Crore units of blood are available. <br /><span className='fs-4'>.</span>The gift of blood is the gift of life. There is no substitute for human blood. <br /><span className='fs-4'>.</span>Every two seconds someone needs blood.<br /><span className='fs-4'>.</span>More than 38,000 blood donations are needed every day.<br /><span className='fs-4'>.</span>A total of 30 million blood components are transfused each year.</p>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Facts about the blood donation process</span> <br /><span className='fs-4'>.</span>Donating blood is a safe process. A sterile needle is used only once for each donor and then discarded. <br /><span className='fs-4'>.</span>Blood donation is a simple four-step process: registration, medical history and mini-physical, donation and refreshments. <br /><span className='fs-4'>.</span>Every blood donor is given a mini-physical, checking the donor's temperature, blood pressure, pulse and hemoglobin to ensure it is safe for the donor to give blood.<br /><span className='fs-4'>.</span>The actual blood donation typically takes less than 10-12 minutes. The entire process, from the time you arrive to the time you leave, takes about an hour and 15 min.<br /><span className='fs-4'>.</span>The average adult has about 10 units of blood in his body. Roughly 1 unit is given during a donation.</p>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Facts about blood and its components</span> <br /><span className='fs-4'>.</span>Blood makes up about 7 percent of your body's weight. <br /><span className='fs-4'>.</span>There are four types of transfusable products that can be derived from blood: red cells, platelets, plasma and cryoprecipitate. Typically, two or three of these are produced from a unit of donated whole blood – hence each donation can help save up to three lives. <br /><span className='fs-4'>.</span>Donors can give either whole blood or specific blood components only. The process of donating specific blood components – red cells, plasma or platelets – is called apheresis.<br /><span className='fs-4'>.</span>Donated platelets must be used within five days of collection.<br /><span className='fs-4'>.</span>Healthy bone marrow makes a constant supply of red cells, plasma and platelets. The body will replenish the elements given during a blood donation – some in a matter of hours and others in a matter of weeks.</p>
            </div>

            <div id='donors'>
            <h1 className='text-center text-black' style={{ marginTop: "80px" }}>Who can/ Can't Donate</h1>
            <h4 className='px-5 text-danger mt-4'>Who can Donate...</h4>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Let others benefit from your good health. Do donate blood if ...</span> <br /><span className='fs-4'>.</span>you are between age group of 18-60 years.<br /><span className='fs-4'>.</span>your weight is 45 kgs or more. <br /><span className='fs-4'>.</span>your haemoglobin is 12.5 gm% minimum.<br /><span className='fs-4'>.</span>your last blood donation was 3 months earlier.<br /><span className='fs-4'>.</span>you are healthy and have not suffered from malaria, typhoid or other transmissible disease in the recent past.</p>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Do abide by our rules - be truthful about your health status!</span> <br /><span className='fs-4'>.</span>We ensure the health of blood, before we take it, as well as after it is collected. <br /><span className='fs-4'>.</span> Firstly, the donor is expected to be honest about his or her health history and current condition. <br /><span className='fs-4'>.</span>Secondly, collected blood is tested for venereal diseases, hepatitis B & C and AIDS.<br /><span className='fs-4'>.</span>You have to be healthy to give 'safe blood'</p>
            <h4 className='px-5 text-danger mt-4'>Who can't Donate...</h4>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Do not donate blood if you have any of these conditions</span> <br /><span className='fs-4'>.</span>Cold / fever in the past 1 week. <br /><span className='fs-4'>.</span>Under treatment with antibiotics or any other medication.<br /><span className='fs-4'>.</span>Cardiac problems, hypertension, epilepsy, diabetes (on insulin therapy), history of cancer,chronic kidney or liver disease, bleeding tendencies, venereal disease etc.<br /><span className='fs-4'>.</span>Major surgery in the last 6 months.<br /><span className='fs-4'>.</span>Vaccination in the last 24 hours.<br /><span className='fs-4'>.</span>Had a miscarriage in the last 6 months or have been pregnant / lactating in the last one year.<br /><span className='fs-4'>.</span>Had fainting attacks during last donation.<br /><span className='fs-4'>.</span>Have regularly received treatment with blood products.<br /><span className='fs-4'>.</span>Shared a needle to inject drugs/ have history of drug addiction.<br /><span className='fs-4'>.</span>Had sexual relations with different partners or with a high risk individual.<br /><span className='fs-4'>.</span>Been tested positive for antibodies to HIV.</p>
            <p className=' px-5 fw-bold mt-4' style={{ textAlign: "justify" }}><span className='fs-5 text-primary'>Pregnancy And Menstrual Cycle</span> <br /><span className='fs-4'>.</span>Females should not donate blood during pregnancy.<br /><span className='fs-4'>.</span>They can donate after 6 months following a normal delivery and when they are not breast feeding.<br /><span className='fs-4'>.</span>Females should not donate blood if they are having heavy menstrual flow or menstrual cramps.</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}    

export default Home
import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../assets/insta-icon-home.png';
import fb from '../assets/fb-icon-home.png';
import twitter from '../assets/twitter-icon-home.png';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import './doctors.css';

const social = [
  { icon: insta },
  { icon: fb },
  { icon: twitter },
];

const Doctors = () => (
  <div>
    <div className="doctors">
      <h1>AVAILABLE DOCTORS</h1>
      <p> Please select a doctor</p>
    </div>
    {/* <button type="button" className="btn btn-dark" onClick={handlePrevClick}>
        {" "}
        &larr; Previous
      </button>  */}

    <div className="doctors-list">
      <div className="doctors1">
        <img src={doctor1} alt="Profile of doctor" className="doctors-images" />
        <h4>
          {
              // this is a link to the doctor's details page}
            <Link to="/add_doctor">Dr. Mary Blackwell</Link>
            }
        </h4>
        <p> Nothing is easy not until you try it</p>
        <div className="social-net">
          {social.map((item) => (
            <a href="/" key={item.icon}>
              <img src={item.icon} alt="social" className="w-8" />
            </a>
          ))}
        </div>
      </div>
      <div className="doctors2">
        <img src={doctor2} alt="profile of doctor" className="doctors-images" />
        <h4>
          {
            // this is a link to the doctor's details page}
            <Link to="/add_doctor">Dr. Wu Moon</Link>
          }
        </h4>

        <p> Nothing is easy not until you try it</p>
        <div className="social-net">
          {social.map((item) => (
            <a href="/" key={item.icon}>
              <img src={item.icon} alt="social" className="w-8" />
            </a>
          ))}
        </div>
      </div>

      <div className="doctors2">
        <img src={doctor3} alt="profile of doctor" className="doctors-images" />
        <h4>
          {
              // this is a link to the doctor's details page}
            <Link to="/add_doctor">Dr. Ian Banda</Link>
            }
        </h4>
        <p> Nothing is easy not until you try it</p>
        <div className="social-net">
          {social.map((item) => (
            <a href="/" key={item.icon}>
              <img src={item.icon} alt="social" className="w-8" />
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* <button type="button" className="btn btn-dark" onClick={handleNextClick}>
        Next &rarr;
      </button> */}
  </div>
);

export default Doctors;

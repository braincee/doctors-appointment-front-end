import React from 'react';
import PropTypes from 'prop-types';
import insta from './images2/insta-icon-home.png';
import fb from './images2/fb-icon-home.png';
import twitter from './images2/twitter-icon-home.png';

const social = [
  { icon: insta },
  { icon: fb },
  { icon: twitter },
];

const imageUrl = 'http://localhost:3001/api/v1/';

const SingleDoctor = ({
  name, image, city, speciality,
}) => (
  <div className="doctors1">
    <div className="image-div">
      <img src={`${imageUrl}${image}`} alt="Profile of doctor" className="doctors-images" />
    </div>
    <div className="doctor-data">
      <h4>{name}</h4>
      <p>.........................</p>
      <p>
        {city}
      </p>
      <p>{speciality}</p>
      <div className="social-net">
        {social.map((item) => (
          <a href="/" key={item.icon}>
            <img src={item.icon} alt="social" className="w-8" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

SingleDoctor.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
};

export default SingleDoctor;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDoctorsAction } from '../../redux/doctorsReducer/doctors';

const DoctorDetails = () => {
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  const params = useParams();
  const doctor = doctors.find((doctor) => doctor.id === Number(params.id));
  const {
    name, speciality, image, fee,
  } = doctor;

  return (
    <div id="RouterNavLink" className="doctor-container">
      <div className="image-container">
        <img src={image} alt="Profile of doctor" className="single-image" />
      </div>
      <div className="details">
        <h4 className="detail-name">{name}</h4>
        <table>
          <tr className="col">
            <th>Speciality</th>
            <td>{speciality}</td>
          </tr>
          <tr className="col">
            <th>Fee</th>
            <td>{fee}</td>
          </tr>
        </table>
        <Link to="/new_appointment" className="btn-details btn mt-4 text-center">Book Appointment</Link>
      </div>
    </div>
  );
};

export default DoctorDetails;

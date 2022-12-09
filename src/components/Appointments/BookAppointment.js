import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userAppointment from '../../redux/appointments/actions/appointmentActions';
import './bookappointment.css';

const BookAppointment = () => {
  const [city, setCity] = useState('');
  const [appointmenTime, setTime] = useState('');
  const [doctorId, setId] = useState('');

  const doctors = useSelector((state) => state.doctors);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const getTarget = event.target;
    const inputvalue = getTarget.value;
    switch (getTarget.name) {
      case 'city':
        setCity(inputvalue);
        return city;
      case 'appointmenTime':
        setTime(inputvalue);
        return appointmenTime;
      case 'doctorId':
        setId(inputvalue);
        return doctorId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      city,
      appointment_time: appointmenTime,
    };

    dispatch(userAppointment(appointment, user.id, doctorId));
    setCity('');
    setTime('');
    setId();
    setTimeout(() => { navigate('/my_appointments'); }, 1000);
  };

  return (
    <section className="appointments-section">
      <div className="appointments-container">
        <h3 className="appointments-title">Book an Appointment</h3>
        <form onSubmit={handleSubmit} className="appointments-form">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
          <input
            className="form-control"
            id="datetime"
            type="datetime-local"
            name="appointmenTime"
            value={appointmenTime}
            min="2022-08-17T00:00"
            max="2050-08-17T00:00"
            onChange={handleChange}
            required
          />
          <select id="doctor" value={doctorId} onChange={handleChange} name="doctorId" className="select">
            <option value="">Select your doctor</option>
            {doctors.length > 0 ? doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            )) : 'No Doctors available'}
          </select>
          <input type="submit" value="Book Appointment" className="button1 btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;

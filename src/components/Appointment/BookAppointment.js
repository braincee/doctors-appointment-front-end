import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAppointment } from '../../redux/appointment/appointmentReducer';
import './bookappointment.css';

const AppointmentForm = () => {
  const [city, setCity] = useState('');
  const [appointmenTime, setTime] = useState('');
  const [doctorId, setId] = useState('');

  const doctors = useSelector((state) => state.doctorReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const getTarget = event.target;
    const inputValue = getTarget.value;
    switch (getTarget.name) {
      case 'city':
        setCity(inputValue);
        return city;
      case 'appointmenTime':
        setTime(inputValue);
        return appointmenTime;
      case 'doctorId':
        setId(inputValue);
        return doctorId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(userAppointment(city, appointmenTime, doctorId));
    event.target.reset();
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <h3 className="appointment-title">Book an Appointment</h3>
        <form onSubmit={handleSubmit} className="appointment-form">
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
          <select value={doctorId} onChange={handleChange} name="doctorId" className="select">
            <option value="">Select your doctor</option>
            {doctors.length > 0 && doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}

          </select>
          <input type="submit" value="Book Appointment" className="button1 btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;

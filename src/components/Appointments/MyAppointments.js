import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppointments, deleteAppointment } from '../../redux/appointments/actions/appointmentActions';
import './appointment.css';

const MyAppointments = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctor);
  const appointments = useSelector((state) => state.appointment.appointments);

  useEffect(() => {
    dispatch(getAppointments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <section className="appointment-container">
      {
      appointments.length === 0 ? (
        <div className="notice-container">
          <h2 className="title">MY APPOINTMENTS</h2>
          <h4 className="notice">No Appointments Available</h4>
        </div>
      ) : (
        <>
          <ul className="my-appointments">
            <li className="title">MY APPOINTMENTS</li>
            {
              appointments.map((appoint) => (appoint.user_id === user.id ? (
                <li key={appoint.id} className="appointment">
                  <div>
                    <h4>
                      {' '}
                      {doctors.filter((doctor) => doctor.id === appoint.doctor_id).map(
                        (doct) => doct.name,
                      )}
                    </h4>
                    <p>{appoint.city}</p>
                  </div>
                  <p>{appoint.appointment_time.substr(0, 10)}</p>
                  <button type="button" onClick={() => handleDelete(appoint.id)} className="appointment-btn">Cancel</button>
                </li>
              ) : null))
            }
          </ul>
        </>
      )
    }
    </section>
  );
};

export default MyAppointments;

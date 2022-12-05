import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppointments, deleteAppointment } from '../../redux/appointments/actions/appointmentActions';

const MyAppointments = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.sessionsReducer.fetchedData.user);
  const appointments = useSelector((state) => state.appointmentReducer.appointments);

  const selfAppoitments = () => {
    const results = [];
    if (appointments.length === 0) {
      appointments.map((appoint) => {
        if (appoint.user_id === User.id) {
          results.push(appoint);
        }
        return null;
      });
    }
    return results;
  };

  useEffect(() => {
    dispatch(getAppointments());
    selfAppoitments();
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  const myAppointments = selfAppoitments();

  return (
    <section>
      <h1>{User.name}</h1>
      {
      myAppointments.length === 0 ? (
        <div>
          <h2>No Appointments Available</h2>
        </div>
      ) : (
        <>
          <ul>
            {
              myAppointments.map((appoint) => (
                <li key={appoint.id}>
                  <h3>{appoint.city}</h3>
                  <h3>{appoint.time}</h3>
                  <button type="button" onClick={() => handleDelete(appoint.id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </>
      )
    }
    </section>
  );
};

export default MyAppointments;

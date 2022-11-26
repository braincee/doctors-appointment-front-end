import React, { Component } from 'react';
import Doctor from './Doctor';

// eslint-disable-next-line react/prefer-stateless-function
class Doctors extends Component {
  render() {
    const { doctors } = this.props;
    return (
      <div>
        <h1 className='display-4 mb-2'>
        AllDoctors
      </h1>
      {doctors.map(doctor =>(<Doctor key={doctor.id} doctor={doctor} />))};
    </div>
    );
  }
}

export default Doctors;
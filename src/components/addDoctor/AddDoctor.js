<<<<<<< HEAD:src/components/Doctors/AddDoctor.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
=======
import React, { useState, useEffect } from 'react';
import './add_doctor.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/addDoctor/AddDoctor.js
import { createDoctorAction } from '../../redux/doctorReduce/doctors';
import localStorages from '../../helpers/localStorage';

import './add_doctor.css';

const AddDoctor = () => {
  const hasAccount = localStorages.getUser();
  const role = hasAccount.user.name;
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'admin') {
      navigate('/401');
    }
  }, []);

  const [name, setName] = useState('');
<<<<<<< HEAD:src/components/Doctors/AddDoctor.js
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');
=======
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [bill, setBill] = useState('');
  const [description, setDescription] = useState('');
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/addDoctor/AddDoctor.js
  const [image, setImage] = useState('');
  // const [errors, setErrors] = useState('');

  const user = useSelector((state) => state.user.fetchedData);

  const dispatch = useDispatch();
<<<<<<< HEAD:src/components/Doctors/AddDoctor.js
  const doctorsName = document.getElementById('name');

  const doctorsSpeciality = document.getElementById('speciality');

  const doctorsBill = document.getElementById('fee');

  const doctorsImage = document.getElementById('image');

  // const newState = useSelector((state) => state.doctors);
  // const navigate = useNavigate();
=======
  const doctorsName = document.getElementById('doctor-name');
  const doctorsEmail = document.getElementById('doctor-email');
  const doctorsSpeciality = document.getElementById('doctor-speciality');
  const doctorsLocation = document.getElementById('doctor-location');
  const doctorsBill = document.getElementById('doctor-bill');
  const doctorsDescription = document.getElementById('doctor-description');
  const doctorsImage = document.getElementById('doctor-image');
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/addDoctor/AddDoctor.js

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctors = {
      name,
      email,
      speciality,
<<<<<<< HEAD:src/components/Doctors/AddDoctor.js
=======
      location,
      bill,
      description,
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/addDoctor/AddDoctor.js
      image,
      fee,
    };

    const { id } = user;

    dispatch(createDoctorAction(doctors, id));
    doctorsName.value = '';
    doctorsEmail.value = '';
    doctorsSpeciality.value = '';
    doctorsLocation.value = '';
    doctorsBill.value = '';
    doctorsDescription.value = '';
    doctorsImage.value = '';
  };

  // useEffect(() => {
  //   if (newState.status === 200) {
  //     navigate('/doctors');
  //   } else if (newState.status !== 200 && newState.status !== '') {
  //     if (newState.fetchedData.error === 404) {
  //       setErrors(newState.fetchedData.errors);
  //     } else {
  //       setErrors(newState.fetchedData.errors);
  //     }
  //   }// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newState]);

  return (
<<<<<<< HEAD:src/components/Doctors/AddDoctor.js
    <section className="doctor-section">
      <div className="doctor-container">
        {/* <p>{errors}</p> */}
        <h3 className="doctor-title">Add A Doctor</h3>
        <form onSubmit={handleSubmit} className="doctor-form">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            className="form-control"
            id="speciality"
            type="text"
            name="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder="Enter your speciality"
            required
          />
          <input
            type="text"
            name="image"
            value={image}
            id="image"
            className="form-control"
            placeholder="Enter an image url link"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            name="fee"
            id="fee"
            value={fee}
            className="form-control"
            placeholder="Enter your fee"
            required
            onChange={(e) => setFee(e.target.value)}
          />
          <input type="submit" value="Submit" className="button1 btn btn-secondary" />
        </form>
=======
    <div className="add-doc-container d-flex justify-content-center">
      <div className="doc-container-form">
        <div className="form-title text-center pb-4">
          <h2>Add doctor</h2>
        </div>

        <div className="form-container d-flex justify-content-center">
          <form className="pb-5" onSubmit={handleSubmit}>
            <div className="doc-form py-5">
              <div className="form-group">
                <p className="ms-4 mb-1"> Name </p>
                <input
                  type="text"
                  name="name"
                  id="doctor-name"
                  className="p-2 form-control rounded-pill"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p className="ms-4 mb-1">Email </p>
                <input
                  type="text"
                  name="email"
                  id="doctor-email"
                  className="form-control rounded-pill"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* End of row 1 */}

              <div className="form-group">
                <p htmlFor="speciality" className="ms-4 mb-1">
                  Speciality
                </p>
                <input
                  type="text"
                  name="speciality"
                  id="doctor-speciality"
                  className="form-control rounded-pill"
                  placeholder="Enter your speciality"
                  required
                  onChange={(e) => setSpeciality(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="image" className="ms-4 mb-1">
                  Image Link
                </p>
                <input
                  type="text"
                  name="image"
                  id="doctor-image"
                  className="form-control rounded-pill"
                  placeholder="Enter an image url link"
                  required
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="location" className="ms-4 mb-1">
                  Location
                </p>
                <input
                  type="text"
                  name="location"
                  id="doctor-location"
                  className="form-control rounded-pill"
                  placeholder="Enter your location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <p htmlFor="bill" className="ms-4 mb-1">
                  Bill
                </p>
                <input
                  type="number"
                  name="bill"
                  id="doctor-bill"
                  className="form-control rounded-pill"
                  placeholder="Enter your bill"
                  required
                  onChange={(e) => setBill(e.target.value)}
                />
              </div>
              <div className="form-group">
                <p htmlFor="description" className="ms-3 mb-1">
                  Description
                </p>
                <textarea
                  name="description"
                  id="doctor-description"
                  className="form-control"
                  placeholder="Enter a brief description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <input
                type="submit"
                name="submit-item"
                id="doctor-submit"
                className="text-center rounded-pill"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/addDoctor/AddDoctor.js
      </div>
    </section>
  );
};
export default AddDoctor;

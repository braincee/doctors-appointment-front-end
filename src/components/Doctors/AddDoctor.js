import React, { useState } from 'react';
import './add_doctor.css';
import { useDispatch } from 'react-redux';
import { createDoctorAction } from '../../redux/doctorReduce/doctors';

const AddDoctor = () => {
  const [name, setName] = useState('');

  const [speciality, setSpeciality] = useState('');

  const [bill, setBill] = useState('');

  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const doctorsName = document.getElementById('doctor-name');

  const doctorsSpeciality = document.getElementById('doctor-speciality');

  const doctorsBill = document.getElementById('doctor-bill');

  const doctorsImage = document.getElementById('doctor-image');

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = {
      name,
      speciality,
      bill,
      image,
    };
    dispatch(createDoctorAction(doctor));
    doctorsName.value = '';
    doctorsSpeciality.value = '';
    doctorsBill.value = '';
    doctorsImage.value = '';
  };

  return (
    <div className="add-doc-container py-5 d-flex justify-content-center">
      <div className="doc-container-form">
        <div className="form-title">
          <h2 className="text-center">Add doctor</h2>
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
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                name="submit-item"
                id="doctor-submit"
                className="text-center rounded-pill"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;

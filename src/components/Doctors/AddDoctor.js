import React from 'react';
import './add_doctor.css';

const AddDoctor = () => (
  <div className="add-doc-container py-5 d-flex justify-content-center">
    <div className="doc-container-form">
      <div className="form-title">
        <h2 className="text-center">Add doctor</h2>
      </div>

      <div className="form-container d-flex justify-content-center">
        <form className="pb-5">
          <div className="doc-form py-5">
            <div className="form-group">
              <p className="ms-4 mb-1"> Full Name </p>
              <input type="text" name="name" id="doctor-name" className="p-2 form-control rounded-pill" placeholder="Enter your name" required />

            </div>

            {/* End of row 1 */}

            <div className="form-group">
              <p htmlFor="speciality" className="ms-4 mb-1">Speciality</p>
              <input type="text" name="speciality" id="doctor-speciality" className="form-control rounded-pill" placeholder="Enter your speciality" required />

            </div>

            <div className="form-group">
              <p htmlFor="image" className="ms-4 mb-1">Image Link</p>
              <input type="text" name="image" id="doctor-image" className="form-control rounded-pill" placeholder="Enter an image url link" required />
            </div>

            <div className="form-group">
              <p htmlFor="bill" className="ms-4 mb-1">Fee</p>
              <input type="number" name="fee" id="doctor-bill" className="form-control rounded-pill" placeholder="Enter your fee" required />

            </div>
          </div>

          <div className="text-center mt-4">
            <input type="submit" name="submit-item" id="doctor-submit" className="text-center rounded-pill" value="SUBMIT" />

          </div>

        </form>
      </div>
    </div>
  </div>
);

export default AddDoctor;

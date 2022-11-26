import { GET_DOCTORS, ADD_DOCTOR, DELETE_CONTACT } from "./types";


export const getDoctors = () => {
    return {
        type: GET_DOCTORS
    }
};

export const addDoctor = (contact) => {
    return {
        type: ADD_DOCTOR,
        payload: contact
    }
}

export const deleteDoctor = (id) => {
    return {
       type: DELETE_CONTACT,
       payload: id,
    }
}


import { ADD_DOCTOR, DELETE_DOCTOR, GET_DOCTORS } from "./types";

const initialState = {
    doctors: [
        {
            name: 'Doctor-1',
            fee: 20,
            image: '',
            details: 'I am Doctor-1'
          },
          {
            name: 'Doctor-2',
            fee: 60,
            image: '',
            details: 'I am Doctor-2'
          },
          {
            name: 'Doctor-3',
            fee: 40,
            image: '',
            details: 'I am Doctor-3'
          }
    ],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DOCTORS:
            return {
                ...state,
            };
            case ADD_DOCTOR:
                return {
                    ...state,
                    contacts: [action.payload, ...state.contacts]
                };
            case DELETE_DOCTOR:
                return {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id == action.payload)
                };
            default:
                return state;
    }
}

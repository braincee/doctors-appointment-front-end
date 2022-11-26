import { GET_DOCTORS } from "./types";

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
                ...state
            };
            default:
                return state;
    }
}
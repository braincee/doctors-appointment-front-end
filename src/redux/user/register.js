import { register, initialState } from './user';

const REGISTER = 'USER_REGISTER';

const registerSessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export const userRegisterAction = (data) => ({
  type: REGISTER,
  payload: data,
});

export const userRegister = (name, email) => async (dispatch) => {
  try {
    const data = await register(name, email);
    dispatch(userRegisterAction(data));
  } catch (e) {
    dispatch(userRegisterAction(e.response));
  }
};

export default registerSessionsReducer;

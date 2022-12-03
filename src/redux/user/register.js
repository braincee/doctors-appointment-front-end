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

export const userRegister = (name, email, id) => async (dispatch) => {
  try {
    const data = await register(name, email, id);
    dispatch(userRegisterAction(data));
  } catch (error) {
    dispatch(userRegisterAction(error.response));
  }
};

export default registerSessionsReducer;

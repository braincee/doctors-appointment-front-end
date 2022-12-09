import { register, login, initialState } from './user';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';

const loginSessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };
    case LOGIN:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };
    case LOGOUT:
      return {
        fetchedData: null,
        status: '',
      };

    default:
      return state;
  }
};

export const userRegisterAction = (data) => ({
  type: REGISTER,
  payload: data,
});

export const userLoginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

export const userRegister = (name, email) => async (dispatch) => {
  try {
    const data = await register(name, email);
    dispatch(userRegisterAction(data));
  } catch (error) {
    dispatch(userRegisterAction(error.response));
  }
};

export const userLogOutAction = () => ({
  type: LOGOUT,
});

export const userLogin = (name, id) => async (dispatch) => {
  try {
    const data = await login(name, id);
    dispatch(userLoginAction(data));
  } catch (error) {
    dispatch(userLoginAction(error.response));
  }
};

export default loginSessionsReducer;

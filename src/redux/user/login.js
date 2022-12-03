import { login, initialState } from './user';

const LOGIN = 'USER_LOGIN';

const loginSessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export const userLoginAction = (data) => ({
  type: LOGIN,
  payload: data,
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

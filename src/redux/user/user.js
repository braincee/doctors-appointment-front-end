import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';
const REGISTER_URL = 'user/add';
const LOGIN_URL = 'user/name';


const persistUser = (user) => {
   localStorage.setItem('user', user);
}

export const register = async (name, email) => {
  const response = await axios({
    method: 'POST',
    url: `${BASE_URL}/${REGISTER_URL}`,
    data: {
      name,
      email,
    },
  });
  persistUser(response.data.user_id);
  return response;
};

export const login = async (name) => {
  const data = await axios({
    method: 'GET',
    url: `${BASE_URL}/${LOGIN_URL}?name=${name}`,
  });
  return data;
};

export const initialState = {
  fetchedData: '',
  status: '',
};

import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';
const REGISTER_URL = 'user/add';
const LOGIN_URL = 'user/name';

export const register = async (name, email, id) => {
  const response = await axios({
    method: 'POST',
    url: `${BASE_URL}/${REGISTER_URL}`,
    data: {
      name,
      email,
      id,
    },
  });

  return response;
};

export const login = async (name, id) => {
  const response = await axios({
    method: 'POST',
    url: `${BASE_URL}/${LOGIN_URL}`,
    data: {
      name,
      id,
    },
  });
  return response;
};

export const initialState = {
  fetchedData: '',
  status: '',
};

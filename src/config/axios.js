import axiosInstance from 'axios';

const { jwt } = JSON.parse(localStorage.getItem('user')) || '';

export default axiosInstance.create({
  baseURL: 'http://localhost:3001',
  headers: { Authorization: jwt },
});

// api/customerService.js
import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api';


export const getDepartment = async () => {

  const response = await axios.get(`${API_BASE_URL}/departments`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};


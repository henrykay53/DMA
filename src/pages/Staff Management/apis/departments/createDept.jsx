import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api';


export const createDept = async () => {
  
  const response = await axios.post(`${API_BASE_URL}/department`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};


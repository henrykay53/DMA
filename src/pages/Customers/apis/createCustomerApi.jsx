// api/customerService.js
import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api';


export const createCustomerApi = async (customerData) => {

  customerData.gender = Number(customerData.gender);
  customerData.businessType = Number(customerData.businessType);
  customerData.leadStatus = Number(customerData.leadStatus);

  console.log(customerData);


  const response = await axios.post(`${API_BASE_URL}`, customerData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};


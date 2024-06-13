import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api'; // Adjust the base URL as needed

// Fetch staff data from the API
export const fetchStaffData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/staff`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data; // Assuming the data is directly accessible via response.data
  } catch (error) {
    console.error('Error fetching staff data:', error);
    throw error;
  }
};

// Other API service methods can be added here...

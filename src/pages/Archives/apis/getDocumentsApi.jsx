import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api'; // Adjust the base URL as needed

// Fetch documents from the API
export const fetchDocuments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/archives`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "accept": "*/*",
      },
    });
    return response.data; // Assuming the data is directly accessible via response.data
  } catch (error) {
    console.error('Error fetching staff data:', error);
    throw error;
  }
};



// Other API service methods can be added here...

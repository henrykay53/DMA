import axios from 'axios';
const API_BASE_URL = 'https://dma-saas.azurewebsites.net/api'; // Adjust the base URL as needed

// Fetch documents from the API
export const editDocuments = async () => {
  try {
    const response = await axios.put(`${API_BASE_URL}/Archive`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "accept": "*/*",
      },
    });
    return response.data; // Assuming the data is directly accessible via response.data
  } catch (error) {
    console.error('Error editing documents:', error);
    throw error;
  }
};



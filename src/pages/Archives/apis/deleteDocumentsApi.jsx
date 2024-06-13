import axios from "axios";
const API_BASE_URL = "https://dma-saas.azurewebsites.net/api"; // Adjust the base URL as needed

// Delete a document from the API
export const deleteDocuments = async (id) => {
  try {
    const fileId = {
      fileId: id,
    };

    console.log("id:", fileId);

    const response = await axios.delete(`${API_BASE_URL}/archive`, {
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      data: fileId, // Assuming fileId needs to be sent in the request body
    });

    return response.data; // Assuming the data is directly accessible via response.data
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

// Other API service methods can be added here...

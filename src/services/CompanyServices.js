import axios from 'axios';

const apiUrl = 'http://localhost:5000/companies';

export const getCompanies = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const addCompany = async (company) => {
  try {
    return await axios.post(apiUrl, company);
  } catch (error) {
    console.error('Error adding company:', error);
    throw error;
  }
};

export const deleteCompany = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    return true; // Indicate success
  } catch (error) {
    console.error('Error deleting company:', error.response?.data || error.message);
    return false; // Indicate failure
  }
};
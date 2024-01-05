// utils/api.js
import axios from 'axios';

const baseURL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';

export const fetchNYTData = async (params = {}) => {
  try {
    const response = await axios.get(`${baseURL}`, {
      params: { apikey: process.env.NEXT_PUBLIC_NYT_API_KEY, ...params },
    });
    console.log(response, 'response?');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from NY Times API:', error);
    throw error;
  }
};

import axios from 'axios';
import toast from 'react-hot-toast';

const httpCommon = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

// Checking for global errors
httpCommon.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status, data } = error.response;
    if (error.response && status === 500) {
      toast.error('Server error occurred. Please try again later.');
    } else if (error.response) {
      console.error(`${data.message ? data.message : error}.`);
    } else {
      toast.error(
        'Network error. Please check your internet connection and try again.'
      );
    }

    return Promise.reject(error);
  }
);

export default httpCommon;

import { USER_COUNT } from '../data/consts';
import httpCommon from './http-client';

const fetchUsers = async (page) => {
  try {
    const response = await httpCommon.get(
      `/users?page=${page}&count=${USER_COUNT}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 404) {
        let errorMessage = 'Page not found';
        if (data && data.message) {
          errorMessage = data.message;
        }
        throw new Error(errorMessage);
      }
      if (status === 422) {
        let errorMessage = 'Validation failed';
        if (data && data.message) {
          errorMessage = data.message;
        }
        throw new Error(errorMessage);
      }
    }
    throw new Error(`Error fetching positions: ${error.message}`);
  }
};

const fetchPositions = async () => {
  try {
    const response = await httpCommon.get('/positions');
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 404 || status === 422) {
        let errorMessage = 'Positions not found';
        if (data && data.message) {
          errorMessage = data.message;
        }
        throw new Error(errorMessage);
      }
    }
    throw new Error(`Error fetching positions: ${error.message}`);
  }
};

const fetchToken = async () => {
  try {
    const response = await httpCommon.get('/token');
    return response.data.token;
  } catch (error) {
    throw new Error(`Error fetching token: ${error.message}`);
  }
};

const registerUser = async (formData, token) => {
  try {
    const response = await httpCommon.post('/users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: token,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(
        `${data.message}. ${status === 422 ? data?.fails.email : ''}`
      );
    }
  }
};

export { registerUser, fetchToken, fetchPositions, fetchUsers };

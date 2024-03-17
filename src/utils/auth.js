import axios from 'axios';

export async function loginUser(credentials) {
  console.log(JSON.stringify(credentials));

  try {
    const response = await axios.post('/api/v1/auth/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      

    const data = response.data;

    localStorage.setItem('accessToken', data.data.accessToken);

    return data;
  } catch (error) {
    console.log(error);
    if (error && error.response && error.response.data) {
      if (Array.isArray(error.response.data.message)) {
        throw new Error(error.response.data.message[0]);
      } else if (typeof error.response.data.message === 'string') {
        throw new Error(error.response.data.message);
      }
    }
    throw new Error('Failed to login.');
  }
}

export function getAccessToken() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    localStorage.clear();
    throw new Error("Access token is missing.");
  }

  return accessToken;
}

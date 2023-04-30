import axios from 'axios';
const base_url = 'http://localhost:5000/api/';
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);
  console.log(response);
};
const authService = {
  login,
};
export default authService;

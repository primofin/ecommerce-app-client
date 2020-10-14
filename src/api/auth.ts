import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1'

const register = async (
  username: string,
  email: string,
  password: string,
  firstName?: string,
  lastName?: string
) => {
  try {
    return await axios.post(baseUrl + '/auth/register', {
      username,
      email,
      password,
      firstName,
      lastName,
    })
  } catch (error) {
    return error
  }
}

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(baseUrl + '/auth/login', {
      username,
      password,
    })
  } catch (error) {
    return error
  }
}

export default {
  register,
  login,
  // logout,
}

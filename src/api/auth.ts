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
    return await axios.post(
      baseUrl + '/auth/register',
      {
        username,
        email,
        password,
        firstName,
        lastName,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      baseUrl + '/auth/login',
      {
        username,
        password,
      },
      { withCredentials: true }
    )
    return response
  } catch (error) {
    return error
  }
}

const logout = async () => {
  try {
    const response = await axios.get(baseUrl + '/auth/logout', {
      withCredentials: true,
    })
    return response
  } catch (error) {
    return error
  }
}

const isAuthenticated = async () => {
  try {
    const response = await axios.get(baseUrl + '/auth/isAuthenticated', {
      withCredentials: true,
    })
    return response
  } catch (error) {
    return error
  }
}

const requestForgotPassword = async (email: string) => {
  try {
    const response = await axios.post(
      baseUrl + '/auth/forgot-password',
      {
        email,
      },
      {
        withCredentials: true,
      }
    )
    return response
  } catch (error) {
    return error
  }
}

const resetPassword = async (password: string, token: string) => {
  try {
    const response = await axios.post(
      baseUrl + `/auth/reset-password/${token}`,
      {
        password,
      },
      {
        withCredentials: true,
      }
    )
    return response
  } catch (error) {
    return error
  }
}

export {
  register,
  login,
  logout,
  isAuthenticated,
  requestForgotPassword,
  resetPassword,
}

import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1'

const updateProfile = async (
  userId: string,
  email: string,
  firstName?: string,
  lastName?: string
) => {
  try {
    return await axios.patch(
      baseUrl + `/users/${userId}`,
      {
        email,
        firstName,
        lastName,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const updatePassword = async (
  userId: string,
  oldPassword: string,
  newPassword?: string
) => {
  try {
    return await axios.patch(
      baseUrl + `/users/change-password/${userId}`,
      {
        oldPassword,
        newPassword,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const addItemToCart = async (userId: string, productId: string) => {
  try {
    return await axios.patch(
      baseUrl + `/users/addToCart/${userId}`,
      {
        productId,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const removeItemFromCart = async (userId: string, productId: string) => {
  try {
    return await axios.patch(
      baseUrl + `/users/removeFromCart/${userId}`,
      {
        productId,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

export {
  updateProfile,
  updatePassword,
  addItemToCart,
  removeItemFromCart,
}

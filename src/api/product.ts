import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1'

const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/products/`, {
      withCredentials: true,
    })
    return res
  } catch (error) {
    return error
  }
}



export { fetchAllProducts }

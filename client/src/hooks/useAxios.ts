import axios from "axios"

const url = 'http://localhost:5500/'

export const UseAxios = async (apiPath: string, data: {}) => {
  const axiosResponse = await axios.post(`${url}${apiPath}`, data)
    .then(data => data).catch(err => console
    .error(`${err.name}: ${err.message} [${err.code}]`))
  return axiosResponse
}
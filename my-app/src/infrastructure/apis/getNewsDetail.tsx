import axios from "axios"
import { BaseDetailURL } from "../../application/common/global"

export default {
  getNewsDetail: (title: any) => axios.get(`${BaseDetailURL}("${title}")&apiKey=${process.env.REACT_APP_API_KEY}`)
};
import axios from "axios"
import { BaseURL } from "../../application/common/global"

export default {
  getAllNews: () => axios.get(`${BaseURL}${process.env.REACT_APP_API_KEY}`) 
};
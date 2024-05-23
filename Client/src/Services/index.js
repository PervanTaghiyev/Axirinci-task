import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAllData() {
  try {
    const response = await axios(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
}

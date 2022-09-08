import axios from "axios";
import { DATA_STORE } from "./ActionType";
export const dataStore = () => (dispatch) => {
  try {
    axios.get("http://localhost:5000/car/available").then((cars) => {
      console.log('cars', cars.data);
      dispatch({ type: DATA_STORE, payload: cars.data })
    })
  } catch (error) {
    console.log('error', error);
  }
};
export const searchAction = (search) => {
 console.log('search', search);
 
  return { type: "SEARCH", payload : search}


}


export const tokens = () =>  {
return { type: "TOKEN_STATUS" }
  

};
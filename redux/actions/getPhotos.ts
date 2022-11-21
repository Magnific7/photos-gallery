import { GET_PHOTOS_START,GET_PHOTOS_SUCCESS,GET_PHOTOS_ERROR } from "../actionTypes/getPhotos";
import axios
 from "axios";
export const GetPhotos = () => (dispatch: any) => {
    dispatch({
        type: GET_PHOTOS_START,
    });
    axios.get('https://api.unsplash.com/users/fableandfolk/photos')
    .then((response: any) => {
        dispatch({
            payload: response,
            type: GET_PHOTOS_SUCCESS,
        });
    })
    .catch((error: any) => {
        dispatch({
            type: GET_PHOTOS_ERROR,
            payload: error,
        });
    });
};
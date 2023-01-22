import { GET_PHOTOS_START,GET_PHOTOS_SUCCESS,GET_PHOTOS_ERROR } from "../../actionTypes/getPhotos";
import axios
 from "axios";

export const getPhotos = () => (dispatch: any) => {
    dispatch({
        type: GET_PHOTOS_START,
    });

    axios.get('https://api.unsplash.com/photos?client_id=1pyvEMIT_EEwT0Jy8LYgiY4MPdKt0bfXGmRy_UivD2E')
    .then((response: any) => {
        dispatch({
            payload: response.data[0],
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
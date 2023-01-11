import { IAllPhotos } from "../../initialStates/photos";
import {
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
} from "../../actionTypes/getPhotos";

import { initialState } from '../../initialStates';

interface IAction {
  type: string;
  payload: any;
}

export default (state: IAllPhotos, { type, payload }: IAction) => {
  switch (type) {
    case GET_PHOTOS_START:
      return {
        ...state,
        photos: {
          ...state.photos,
          data: null,
          loading: true,
          error: null,
          fetched: false,
        },
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          data: payload,
          loading: false,
          error: null,
          fetched: true,
        },
      };
    case GET_PHOTOS_ERROR:
      return {
        ...state,
        photos: {
          ...state.photos,
          data: null,
          loading: false,
          error: payload,
          fetched: true,
        },
      };
    default:
      return null;
  }
};

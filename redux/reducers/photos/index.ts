import {initialState} from "../../initialStates";
import getPhotos from "./getPhotos";

export default (
  state = initialState.photos,
  action: { type: string; payload: any },
) => ({
  ...state,
  ...getPhotos(state, action),
});

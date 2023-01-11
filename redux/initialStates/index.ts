import photos, { IAllPhotos } from "./photos";



export interface IRootState {

  photos: IAllPhotos;

}
export const initialState: IRootState = {
  photos,
};
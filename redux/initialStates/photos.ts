export default {
    photos: {
      data: {},
      loading: false,
      error: null,
      fetched: false,
    },
  };
  
  export interface IAllPhotos {
    photos: {
      data: { [key: string]: any };
      loading: boolean;
      error: any;
      fetched: boolean;
    };
  }
  
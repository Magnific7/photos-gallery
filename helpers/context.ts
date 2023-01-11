import { createContext } from "react";

export interface SvpType {
  error: string | null;
  photos: { [key: string]: any };
}

interface CtxType {
  svpProps: SvpType;
}

const initialValue = { svpProps: { error: null, photos: [] } };

const Context = createContext(initialValue);

export default Context;

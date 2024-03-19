import { createStore } from "redux";
import appointmentsReducer from "./reducers/reducer";

export default (intialState) => {
    return createStore(appointmentsReducer, intialState);
  }
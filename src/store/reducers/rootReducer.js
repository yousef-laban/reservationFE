import { combineReducers } from "redux";
import user from "./authReducer";
import reservations from "./reservations";

const rootReducer = combineReducers({
  user: user,
  reservations: reservations,
});

export default rootReducer;

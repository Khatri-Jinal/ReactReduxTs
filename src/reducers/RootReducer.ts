import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const RootReducer = combineReducers({
  users: userReducer
});

export default RootReducer
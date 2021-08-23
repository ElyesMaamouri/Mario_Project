import authReduce from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReduce,
  project: projectReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import home from "./home"
import privilegesGroup from "./privilegesGroup"

export const reducers = combineReducers({
  home,
  privilegesGroup
})
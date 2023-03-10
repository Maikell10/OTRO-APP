import { combineReducers } from "redux";

import tabReducer from "./tab/tabReducer";
import constReducer from "./constants/constReducer";

export default combineReducers({
    tabReducer,
    constReducer,
});

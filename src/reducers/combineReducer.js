import { combineReducers } from "redux";

import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./authReducers";

export const rootReducer=combineReducers({
    auth: authReducer,
    banking:bankingReducer
})



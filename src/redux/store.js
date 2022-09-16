import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})



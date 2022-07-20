import { createStore, combineReducers } from "redux";
import { saveCategories } from "./reducers/categoryReducer";

const reducers = combineReducers(
  {
    categories: saveCategories,
  }
);
export type RootState = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;

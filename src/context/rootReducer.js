import combineReducers from "./combinerReducers";
import snackbarReducer from "./reducers/snackbar";

// Need to add reducers here
export const reducer = {
  snackbarReducer,
};

// Reducers to be combiner here similar to redux
export default combineReducers(reducer);

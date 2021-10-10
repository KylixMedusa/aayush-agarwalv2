import { ADD_SNACKBAR, REMOVE_SNACKBAR } from "../actions/snackbar";

const initialState = {
  snackbar: null,
};

/**
 * Main function in charge of updating the state on the redux-store
 *
 * @param {object} state Contains the properties needed to be updated
 * @param {object} action Sets what should be updated on the state
 */
const snackbarReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ADD_SNACKBAR:
      return {
        ...state,
        snackbar: action.payload,
      };
    case REMOVE_SNACKBAR:
      return {
        ...state,
        snackbar: null,
      };
    default:
      return state;
  }
};

export default snackbarReducer;

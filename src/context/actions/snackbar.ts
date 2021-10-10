export const ADD_SNACKBAR = "ADD_SNACKBAR";
export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";

export const addSnackbar = (text: string) => {
  return {
    type: ADD_SNACKBAR,
    payload: text,
  };
};

export const removeSnackbar = () => {
  return {
    type: REMOVE_SNACKBAR,
  };
};

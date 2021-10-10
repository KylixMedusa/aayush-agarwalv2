/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Snackbar.scss";
import connect from "../../context/connect";
import { removeSnackbar } from "../../context/actions/snackbar";

interface Props {
  snackbar: string | null;
  deleteSnackbar: () => void;
}

const Snackbar: React.FC<Props> = ({ snackbar, deleteSnackbar }) => {
  let timeOut: NodeJS.Timeout;

  useEffect(() => {
    if (snackbar) {
      timeOut = setTimeout(() => {
        deleteSnackbar();
      }, 3000);
    }
    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [snackbar]);
  return snackbar ? <div className="snackbar">{snackbar}</div> : null;
};

const mapStateToProps = ({ snackbarReducer }: any) => {
  return {
    snackbar: snackbarReducer?.snackbar,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteSnackbar: () => dispatch(removeSnackbar()),
  };
};

const withConnect = (Component: React.FC<Props>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component as any);

export default withConnect(Snackbar);

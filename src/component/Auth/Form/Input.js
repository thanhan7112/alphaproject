import React from "react";
import { TextField } from "@mui/material";
import '../Auth.css'
const Input = ({ error, ...rest }) => {
  return (
    <div className="field__input">
      {error ? (
        <TextField
          {...rest}
          error
          helperText={error}      
          className="input"
        />
      ) : (
        <TextField
          {...rest}
          className="input"
        />
      )}
    </div>
  );
};

export default Input;

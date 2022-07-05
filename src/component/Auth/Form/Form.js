import React, { Component } from "react";
import Input from "./Input";
import "../Auth.css";
class Form extends Component {
  state = { data: {}, errors: {} };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderInput(name, label, type = "text", required = true) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
        required={required}
      />
    );
  }

  renderSubmitBtn(name) {
    return (
      <button type="submit" className="btn">
        {name}
      </button>
    );
  }
}

export default Form;

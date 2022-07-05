import React from "react";
import { Link } from "react-router-dom";
import { login } from "./Services/AuthService";
import Form from "./Form/Form";
import "./Auth.css";
import avatar from "../../Image/pet8.png";
class Login extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      const { data } = await login(this.state.data);
      window.localStorage.setItem("token", data);
      window.location = "/";
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.email = error.response.data;
      errors.password = error.response.data;
      this.setState({ errors });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Authform">
        <div className="form">
          <div className="avatarlogin">
            <img className="image" src={avatar} alt="Snow"></img>
          </div>

          <div className="form_hading">
            <i class="bx bxl-react"></i>
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderSubmitBtn("Login")}
            <div className="linksignup">
              Don't have an account? <Link to="/signup">Signup </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;

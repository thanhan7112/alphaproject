import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { register } from "./Services/UserService";
import Form from "./Form/Form";
import avatar from "../../Image/pet8.png";
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

class Signup extends Form {
    state = { data: { name: "", email: "", password: "" }, errors: {} };

    doSubmit = async () => {
        try {
            await register(this.state.data);
            this.props.navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="Authform"
            >
                <div className="form">
                <div className="avatarlogin">
            <img className="image" src={avatar} alt="Snow"></img>
          </div>
                    <div className="form_hading">
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSubmitBtn("Signup")}
                    <div className="linksignup">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
                    </div>
                    
                </div>
               
            </form>
        );
    }
}

export default withRouter(Signup);

import React, { Component, useEffect, useState } from "react";
import { getCurrentUser } from "../Auth/Services/AuthService";
import "./Userbody.css";
import axios from "axios";
function withRouter(Component) {
  function UserShop(props) {
    const [user, setUser] = useState("");
    useEffect(() => {
      setUser(getCurrentUser());
    }, []);
    const userId = user._id;
    const emailUser = user.email;
    console.log(emailUser)
    return <Component {...props} userId={userId} emailUser={emailUser}/>;
  }
  return UserShop;
}
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeavatar = this.onChangeavatar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      messageUpdate:""
    };
  }
  onChangeavatar(e) {
    this.setState({
      avatar: e.target.files[0],
    });
  }
  onSubmit(event, _id) {
    event.preventDefault();
    const CreateUser = new FormData();
    CreateUser.append("avatar", this.state.avatar);
    CreateUser.append("emailUser", this.props.emailUser);
    CreateUser.append("idUser", this.props.userId);
    console.log(this.props.emailUser)
    axios
      .post("http://localhost:9000/api/data", CreateUser)
      .then((res) => {const messageUpdate = res.data.message; this.setState({messageUpdate})})
  }
  render() {
    return (
      <div>
        <form className="FormUp" onSubmit={this.onSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onChange={this.onChangeavatar}
            required={true}
          />
          <label className="labeld" for="file">
            <i class="bx bx-folder-open"> </i> <p>{this.state.messageUpdate != "" ? <p>{this.state.messageUpdate}</p> : <p>Choose a file</p>}</p>
          </label>
          <div >
            <input
              type="submit"
              value="Create"
              className="btnupdate"
            />
          </div>
          
        </form>
        
      </div>
    );
  }
}
export default withRouter(CreateUser);

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
    return <Component {...props} userId={userId} />;
  }
  return UserShop;
}
class UpdateUser extends Component {
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
    const updateUser = new FormData();
    updateUser.append("avatar", this.state.avatar);
    axios
      .patch("http://localhost:9000/api/user/" + this.props.userId, updateUser)
      .then((res) => {const messageUpdate = res.data.message; this.setState({messageUpdate})})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            onChange={this.onChangeavatar}
          />
          <label className="labeld" for="file">
            <i class="bx bx-folder-open"> </i> <p>{this.state.messageUpdate != "" ? <p>{this.state.messageUpdate}</p> : <p>Choose a file</p>}</p>
          </label>
          <div >
            <input
              type="submit"
              value="Update"
              className="btnupdate"
            />
          </div>
          
        </form>
        
      </div>
    );
  }
}
export default withRouter(UpdateUser);

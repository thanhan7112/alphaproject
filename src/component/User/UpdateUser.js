import React, { Component, useEffect, useState } from "react";
import { getCurrentUser } from "../Auth/Services/AuthService";
import "./Userbody.css";
import axios from "axios";
function withRouter(Component) {
  function UserShop(props) {
    const [user, setUser] = useState("");
    const [DataUp, setDataUp] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:9000/api/data").then(res => setDataUp(res.data))
    }, []);
    var GetUp = DataUp.filter(element => {
      return element.idUser === user._id
    })
  
    var GetId = GetUp.map(element => {
      return element._id
    })
    useEffect(() => {
      setUser(getCurrentUser());
    }, []);
    const userId = user._id;
    return <Component {...props} userId={userId} GetId={GetId[0]}/>;
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
      .patch("http://localhost:9000/api/data/" + this.props.GetId, updateUser)
      .then((res) => {const messageUpdate = res.data.message; this.setState({messageUpdate})})
  }
  render() {
    console.log(this.props.GetId)
    return (
      <div>
        <form className="FormUp" onSubmit={this.onSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            onChange={this.onChangeavatar}
            required={true}
          />
          <label className="labeld" for="file">
            <i class="bx bx-folder-open"> </i> <p>{this.state.messageUpdate != "" ? <p>{this.state.messageUpdate}</p> : <p>Choose a file</p>}</p>
          </label>
            <input
              type="submit"
              value="Update"
              className="btnupdate"
            />
          
        </form>
        
      </div>
    );
  }
}
export default withRouter(UpdateUser);

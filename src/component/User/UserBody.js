import React, { useState, useEffect, Component } from "react";
import HeaderMain from "../Header";
import { getCurrentUser } from "../Auth/Services/AuthService";
import axios from "axios";
import "./Userbody.css";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";
import moment from "moment";
import ReactPaginate from "react-paginate";
function withRouter(Component) {
  function ComponentWithRouter(props) {
    const [user, setUser] = useState("");
    useEffect(() => {
      setUser(getCurrentUser());
    }, []);
    console.log(user)
    const [Data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:9000/api/data")
        .then((response) => {
          console.log(response.data)
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    const filterid = Data.filter((element) => {
      return element.idUser === user._id
    })
    console.log(Data)
    return <Component {...props} user={user} filterid={filterid} />;
  }
  return ComponentWithRouter;
}
class UserBody extends Component {

  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      data: null,
    }
  }
  componentDidMount() {
    const getData = () => {
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

      fetch(url).then(r => r.json())
        .then((bitcoinData) => {
          const sortedData = [];
          let count = 0;
          for (let date in bitcoinData.bpi) {
            sortedData.push({
              d: moment(date).format('MMM DD'),
              p: bitcoinData.bpi[date].toLocaleString('us-EN', { style: 'currency', currency: 'USD' }),
              x: count,
              y: bitcoinData.bpi[date]
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
  }
  render() {
    const UserID = this.props.filterid.map((userD) => (
      userD.userId
    ))
    console.log(this.state.data)
    return (
      <div className="home_content">
        <HeaderMain />
        {this.props.user && (
          <div className="UserBody">
            <div className="user_detail_Information">
              <div className="table_user">
                {this.state.edit === false ? (
                  <div className="Avatar_user">
                    {this.props.filterid.map((userD) => (
                      <div className="Avatar" key={userD._id}>
                        <img className="avataruser" src={userD.avatar} alt=""></img>
                      </div>
                    ))}
                    <i class="bx bxs-edit-alt" onClick={() => this.setState({
                      edit: true
                    })}></i>
                    <div className="username_box">
                      <i class="bx bx-user"></i>
                      <h4>{this.props.user.name}</h4>
                    </div>
                  </div>
                ) : (
                  <div className="Avatar_user">
                    <i
                      class="bx bx-window-close"
                      onClick={() => this.setState({
                        edit: false
                      })}
                    ></i>
                    {UserID.length > 0 ? <UpdateUser /> : <CreateUser />}
                  </div>
                )}
                <div className="list_box_user"></div>
                <div className="list_box_user"></div>
                <div className="list_box_user"></div>
              </div>
            </div>

            <div className="user_detail_earn">
              <div className="list_earn">
                <div className="list_earn_child">
                  <i class="bx bxs-credit-card"></i>
                </div>
                <div className="list_earn_child">
                  <i class="bx bxs-wallet-alt"></i>
                </div>
                <div className="list_earn_child">
                  <i class="bx bxs-color"></i>
                </div>
              </div>
              <div className="purchase_box">
                <div className="pay_history_header"><h3>Payment History</h3></div>

                <div className="pay_history"></div>
              </div>
            </div>
          </div>
        )}
        {!this.props.user && (
          <div className="UserBody">
            <div className="user_detail_Information">
              <div className="table_user">
                {this.state.edit == false ? (
                  <div className="Avatar_user">
                    <div className="Avatar"></div>
                    <i class="bx bxs-edit-alt" onClick={() => this.setState({
                      edit: true
                    })}></i>
                    <div className="username_box">
                      <i class="bx bx-user"></i>
                    </div>
                  </div>
                ) : (
                  <div className="Avatar_user">
                    <i
                      class="bx bx-window-close"
                      onClick={() => this.setState({
                        edit: false
                      })}
                    ></i>
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file">
                      <i class="bx bx-folder-open"></i>Choose a file
                    </label>
                  </div>
                )}

                <div className="list_box_user"></div>
                <div className="list_box_user"></div>
                <div className="list_box_user"></div>
              </div>
            </div>
            <div className="user_detail_earn">
              <div className="list_earn">
                <div className="list_earn_child">
                  <i class="bx bxs-credit-card"></i>
                </div>
                <div className="list_earn_child">
                  <i class="bx bxs-wallet-alt"></i>
                </div>
                <div className="list_earn_child">
                  <i class="bx bxs-color"></i>
                </div>
              </div>
              <div className="purchase_box"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default withRouter(UserBody);

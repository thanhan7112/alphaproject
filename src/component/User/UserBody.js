import React, { useState, useEffect } from "react";
import HeaderMain from "../Header";
import { getCurrentUser } from "../Auth/Services/AuthService";
import axios from "axios";
import "./Userbody.css";
import UpdateUser from "./UpdateUser";
const UserBody = () => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  console.log(user);
  return (
    <div className="home_content">
      <HeaderMain />
      {user && (
        <div className="UserBody">
          <div className="user_detail_Information">
            <div className="table_user">
              {edit == false ? (
                <div className="Avatar_user">
                  <div className="Avatar">
                    <img className="avataruser" src={user.avatar}></img>
                  </div>
                  <i class="bx bxs-edit-alt" onClick={() => setEdit(true)}></i>
                  <div className="username_box">
                    <i class="bx bx-user"></i>
                    <h4>{user.name}</h4>
                  </div>
                </div>
              ) : (
                <div className="Avatar_user">
                  <i
                    class="bx bx-window-close"
                    onClick={() => setEdit(false)}
                  ></i>
                  <UpdateUser/>
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
      {!user && (
        <div className="UserBody">
          <div className="user_detail_Information">
            <div className="table_user">
              {edit == false ? (
                <div className="Avatar_user">
                  <div className="Avatar"></div>
                  <i class="bx bxs-edit-alt" onClick={() => setEdit(true)}></i>
                  <div className="username_box">
                    <i class="bx bx-user"></i>
                  </div>
                </div>
              ) : (
                <div className="Avatar_user">
                  <i
                    class="bx bx-window-close"
                    onClick={() => setEdit(false)}
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
};

export default UserBody;

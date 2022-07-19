import "./Main.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCurrentUser } from "./Auth/Services/AuthService";
import axios from "axios";
const MainMenu = () => {
  const [btn, setBtn] = useState(true);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  const [DataUp, setDataUp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/data").then(res => setDataUp(res.data))
  }, []);
  var GetUp = DataUp.filter(element => {
    return element.idUser === user._id
  })
  var avatar = GetUp.map(element => {
    return element.avatar
  })
  const location = useLocation();

  const {pathname} = location;

  const splitLocation = pathname.split("/")
  return (
    <div className={btn.btn == true ? "sidebar active" : "sidebar"}>
      <div className="logo_content">
        <div className="logo">
          <i class="bx bxl-react"></i>
          <div className="logo_name">Codeding</div>
        </div>
        <i
          class="bx bx-menu"
          onClick={() => {
            setBtn((prevState) => ({
              btn: !prevState.btn,
            }));
          }}
          id="btn"
        ></i>
      </div>
      <ul className="nav_list">
        <Link className="linktext" to="/">
          <li className={splitLocation[1] === "" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
        </Link>
        <Link className="linktext" to="/User">
          <li className={splitLocation[1] === "User" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
        </Link>
        <Link className="linktext" to="/Messages">
          <li className={splitLocation[1] === "Messages" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-conversation"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
        </Link>
        <Link className="linktext" to="/Your_shop">
          <li className={splitLocation[1] === "Your_shop" ? "activeNav" : ""}>
            <a>
            <i class='bx bxs-wrench'></i>
              <span className="links_name">Your shop</span>
            </a>
            <span className="tooltip">Your shop</span>
          </li>
        </Link>
        <Link className="linktext" to="/File">
          <li className={splitLocation[1] === "File" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">File Manager</span>
          </li>
        </Link>
        <Link className="linktext" to="/Order">
          <li className={splitLocation[1] === "Order" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-cart"></i>
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
        </Link>
        <Link className="linktext" to="/Saved">
          <li className={splitLocation[1] === "Saved" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
        </Link>
        <Link className="linktext" to="/Setting">
          <li className={splitLocation[1] === "Setting" ? "activeNav" : ""}>
            <a>
              <i class="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
        </Link>
      </ul>
      <div className="profile_content">
        {user && (
          <div className="profile">
            <div className="profile_details">
              <img src={avatar} alt="" />
              <div className="name_job">
                <div className="name">{user.name}</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <Link to="/logout" style={{color:'white'}}>
            <i class="bx bx-log-out" id="log_out"></i>
            </Link>
          </div>
        )}
        {!user && (
          <div className="profile">
            <Link to="/login">
              <i class="bx bx-log-in" id="log_out"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
    // {/* // */}
  );
};

export default MainMenu;

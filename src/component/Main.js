import "./Main.css";
import React, { useState, useEffect } from "react";
import profile from "../Image/pet8.png";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./Auth/Services/AuthService";
const MainMenu = () => {
  const [btn, setBtn] = useState(true);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
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
        {/* <li>
          <a>
            <i
              class="bx bx-search"
              onClick={() => {
                setBtn((prevState) => ({
                  btn: !prevState.btn,
                }));
              }}
            />
            <input type="text" placeholder="Search..." />
          </a>
          <span className="tooltip">Search</span>
        </li> */}
        <Link className="linktext" to="/">
          <li>
            <a>
              <i class="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
        </Link>
        <Link className="linktext" to="/User">
          <li>
            <a>
              <i class="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
        </Link>
        <Link className="linktext" to="/Messages">
          <li>
            <a>
              <i class="bx bx-conversation"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
        </Link>
        <Link className="linktext" to="/Analytic">
          <li>
            <a>
              <i class="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytic</span>
            </a>
            <span className="tooltip">Analytic</span>
          </li>
        </Link>
        <Link className="linktext" to="/File">
          <li>
            <a>
              <i class="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">File Manager</span>
          </li>
        </Link>
        <Link className="linktext" to="/Order">
          <li>
            <a>
              <i class="bx bx-cart"></i>
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
        </Link>
        <Link className="linktext" to="/Saved">
          <li>
            <a>
              <i class="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
        </Link>
        <Link className="linktext" to="/Setting">
          <li>
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
              <img src={user.avatar} alt="" />
              <div className="name_job">
                <div className="name">{user.name}</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <Link to="/login" style={{color:'white'}}>
            <i class="bx bx-log-out" id="log_out"></i>
            </Link>
          </div>
        )}
        {!user && (
          <div className="profile">
            <Link to="/logout">
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

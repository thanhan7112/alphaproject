import React, { useState, useEffect } from 'react'
import '../Main.css'
import './Order.css'
import axios from 'axios'
import Art from './Art';
import { getCurrentUser } from '../Auth/Services/AuthService'
import Coll from './Coll';
import Banner from '../../Image/banner.jpg'
import Banner2 from '../../Image/banner2.jpg'

const OrderBody = () => {
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
  const filter = filterid.map((element) => {
    return element.avatar
  })
  console.log(filter[0])
  const [ClickBut, SetClickBut] = useState("Art")
  console.log("ClickBut" + ClickBut)
  const [StateBan, setStateBan] = useState(false)
  setTimeout(() => {
    setStateBan(!StateBan);
  }, 5000)
  return (
    <div className='Oder_Content'>
      <div className='Detail_Order'>
        <div className='Explore_BoxUser'>
          <div className='Explore'>
            <img src={StateBan == true ? Banner : Banner2} alt=""></img>
            {/* <img src={Banner2} alt=""></img> */}
          </div>
          <div className='BoxUser'>
            <div className='boxed-child'>
              <img src={filter[0]} alt=""></img>
            </div>

          </div>
        </div>
        <div className='Order'>
          <div className='OrderSelect'>
            <li onClick={() =>
              SetClickBut("Art")
            } className={ClickBut === "Art" ? "Art" : "Ar"}>
              <i class='bx bxl-react'></i>
              <span className="links_name">Art</span>
            </li>
            <li onClick={() => SetClickBut("Collectibles")} className={ClickBut === "Collectibles" ? "Coll" : "Col"}>
              <i class='bx bxl-react' ></i>
              <span className="links_name">Collectibles</span>
            </li>
            <li onClick={() => SetClickBut("Utility")} className={ClickBut === "Utility" ? "Utility" : null}>
              <i class='bx bxl-react' ></i>
              <span className="links_name">Utility</span>
            </li>
          </div>
          <div className='OrderNum'>
            {ClickBut === "Art" && <Art />}
            {ClickBut === "Collectibles" && <Coll />}
          </div>
        </div>
      </div>
      <div className='Top_Artist'>
        <div className='TopSeller'></div>
        <div className='TopSeller'></div>
        <div className='TopSeller'></div>
        <div className='TopSeller'></div>
        <div className='TopSeller'></div>
      </div>
    </div>
  )
}

export default OrderBody
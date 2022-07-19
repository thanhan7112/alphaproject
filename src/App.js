
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './Component/Order/Order';
import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Signup from './Component/Auth/Signup';
import Logout from './Component/Auth/Logout';
import User from './Component/User/Users';
import { getCurrentUser } from './Component/Auth/Services/AuthService';
import Shop from './Component/UserShop/Shop';
import Message from './Component/Message/Message';

function App() {
  
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Login/>}></Route>
        <Route path='/User' element={<User/>} ></Route>
        <Route path='/Messages' element={<Message/>}></Route>
        <Route path='/Your_shop' element={<Shop/>}></Route>
        <Route path='/Order' element={<Order/>}></Route>
        <Route path='/Saved'></Route>
        <Route path='/Setting'></Route>
        <Route path=":coinId"/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

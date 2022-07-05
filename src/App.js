
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Auth/Login';
import Logout from './component/Auth/Logout';
import Signup from './component/Auth/Signup';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import User from './component/User/User';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Messages'></Route>
        <Route path='/Analytic'></Route>
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

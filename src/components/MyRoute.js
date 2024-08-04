import react, { useState } from 'react'
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import AllDonations from './AllDonations';
import AllProducts from './AllProducts';
import Donation from './Donation';
import Item from './Item';
import Table from './Table';
import UserDetails from './UserDetails';
import '../styleSheets//MyRoute.css';
import Login from './Login';
import EditItem from './EditItem';

export default function MyRoute(props) {
    const navigate = useNavigate();
    const [name, setName] = useState(JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).username : "");
    const exit = () => {
        localStorage.setItem("user", null);
        localStorage.setItem("login", 0);
        props.setIsLogin(0);
    }
    return (
        <div>
            <img src="./assets/logo.png" id="logo" />
            <nav className='navbar navbar-expand-lg navbar-light bg-light' id="nav">
                <div>
                    <Link to='/' className='navbar-brand'>כל המוצרים</Link>
                    <Link to='/donation' className='navbar-brand'>לתרומה</Link>
                    {props.isLogin == 2 && <Link to='/table' className='navbar-brand'>טבלת המוצרים</Link>}
                    {props.isLogin == 2 && <Link to='/allDonations' className='navbar-brand'>כל התרומות</Link>}
                    <Link to='/userDetails' className='navbar-brand'>פרטי משתמש</Link>
                    <Link onClick={exit} className='navbar-brand'>יציאה</Link>
                    <h5 id="hello">שלום {name}</h5>
                </div>
            </nav>

            <img src="./assets/סוף-דסק.jpg" id="img" />
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/table" element={<Table />} />
                <Route path="/item/:id" element={<Item />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/allDonations" element={<AllDonations />} />
                <Route path="/userDetails" element={<UserDetails setName={setName}/>} />
                <Route path="/login" element={<Login />} />
                <Route path='/editItem/:id' element={<EditItem/>}/>
            </Routes>
        </div>)
}
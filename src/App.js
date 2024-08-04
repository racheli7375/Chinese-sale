import react from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import MyRoute from './components/MyRoute';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch } from 'react-redux';
import { initialItems } from "./actions";
import axios from 'axios';

export default function App() {
  const dispach = useDispatch();
  const [arr, setArr] = useState([])
  const [isLogin, setIsLogin] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("login"))
      setIsLogin(localStorage.getItem("login"));
    else {
      localStorage.setItem("login", 0);
      setIsLogin(0);
    }
    axios.get('./products.json').then(data => { setArr(data.data); });

  }, [])
  useEffect(() => { dispach(initialItems(arr))}, [arr]);
  return (
    <div className="App">
      <div className="App">
        {isLogin == 0 ?
          <Login setIsLogin={setIsLogin} />
          :
          <BrowserRouter>
            <MyRoute setIsLogin={setIsLogin} isLogin={isLogin} />
          </BrowserRouter>
        }
      </div>
    </div>
  );
}


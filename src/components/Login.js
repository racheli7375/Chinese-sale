import { useState } from 'react'
import axios from 'axios'
import '../styleSheets/Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const setLogin = () => {
        if (name === "admin" && password === "1234") {
            localStorage.setItem("user", JSON.stringify({ username: name, password, address: null, email: null }));
            localStorage.setItem("login", 2);
            props.setIsLogin(2);
        }
        else if (name !== "admin") {
            let user;
            axios.get(`http://localhost:4000/user/getUserByName/${name}`).then(succ => { user = succ.data; localStorage.setItem("user", JSON.stringify(user)); });
            localStorage.setItem("login", 1);
            props.setIsLogin(1);
            if (!user || user.password !== password) {
                localStorage.setItem("user", JSON.stringify({ username: name, password, address: null, email: null }));
                axios.post('http://localhost:4000/user/addUser', { username: name, password: password, address: null, email: null })
                    .then(succ => console.log("name", succ.data.username));
            }
            axios.post('http://localhost:4000/user/addUser', { userName: name, password: password, address: null, email: null });
        }
        else alert("wrong password");
    }
    return (
        <>
            <div className='container'>
                <img alt='logo' src="./assets/logo2.png" className='img' />
                <form >
                    <TextField id="filled-basic" className='inp' label="הכנס שם" variant="filled" onChange={(e) => setName(e.target.value)} />
                    <TextField id="filled-basic" className='inp' type="password" label="סיסמא" tlabel="סיסמא" variant="filled" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={setLogin} variant="contained" id="btn" size="medium" className="inp">OK</Button>
                </form>
            </div>
        </>)
}

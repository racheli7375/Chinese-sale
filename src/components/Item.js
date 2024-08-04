import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useParams } from "react-router-dom";
import '../styleSheets/Item.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { addDonation } from "../actions";

export default function Item() {
    const products = useSelector((state) => state.products);
    const [item, setItem] = useState({});
    const [styleForm, setStyleForm] = useState('hidden');
    useEffect(() => { setItem(products.find(x => x.id == params.id)) }, []);
    const params = useParams();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
    } = useForm();
    const changeVisibility = () => {
        setStyleForm('visible');
    }
    const onsubmit = () => {
        dispatch(addDonation({ sum: watch("num") * item.price, kindOfPay: watch("kindOfPay") }));
    }
    return (
        <div id="container">
            <div id="d1">
                <h3>{item.id}</h3>
                <h2>{item.name}</h2>
                <img src={`../../assets/${item.picture}`} id="image" />
                <h4>{item.price}</h4>
                <Button variant="contained" id="btn" size="medium" onClick={changeVisibility}>לרכישת כרטיס</Button>
            </div>
            <form onSubmit={handleSubmit(onsubmit)} style={{ visibility: `${styleForm}` }}>
                <TextField type="number" className='inp' id="filled-basic4" label="מספר כרטיסים" variant="filled" {...register('num', { require: true })} defaultValue="1" />
                <br />
                <select id="select" className='inp' {...register('kindOfPay', { require: true })}>
                    <option value="אשראי">אשראי</option>
                    <option value="מזומן">מזומן</option>
                    <option value="צ'ק">צ'ק</option>
                    <option value="הוראת קבע">הוראת קבע</option>
                </select>
                <br />
                <Button type="submit" variant="contained" id="btn" size="medium" className="inp">שליחה</Button>
            </form>
        </div>
    );
}
import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addDonation } from '../actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Donation() {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onsubmit = () => {
        dispatch(addDonation({ sum: watch("sum"), kindOfPay: watch("kindOfPay") }))
    }
    return (
        <>
            <h4>תרומה</h4>
            <form onSubmit={handleSubmit(onsubmit)}>
                <TextField type="number" className='inp' id="filled-basic4" label="סכום לתרומה" variant="filled" {...register('sum', { require: true })} />
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
        </>
    )
}
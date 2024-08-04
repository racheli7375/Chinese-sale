import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { updateItem } from "../actions";

import Button from '@mui/material/Button';


export default function EditItem() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [item, setItem] = useState({});
    useEffect(() => { setItem(products.find(x => x.id == params.id)) }, []);
    const params = useParams();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onsubmit = (form) => {
        dispatch(updateItem({ id: item.id, name: watch('name'), picture: watch('picture'), price: watch('price') }));
    }
    return (
        <>
            {
                Object.keys(item).length > 0
                &&
                <form onSubmit={handleSubmit(onsubmit)}>
                    <TextField id="filled-basic1" className='inp' label="שם מוצר" variant="filled" {...register('name')} defaultValue={item.name} />
                    <TextField id="filled-basic2" type="picture" className='inp' label="תמונה" variant="filled" {...register('picture')} defaultValue={`../../assets/${item.picture}`} />
                    <TextField id="filled-basic3" type="number" className='inp' label="מחיר" variant="filled" {...register('price')} defaultValue={item.price} />
                    <Button type="submit" variant="contained" id="btn" size="medium" className="inp">שליחה</Button>
                  

                </form>}
        </>
    )
}
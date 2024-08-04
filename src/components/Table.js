import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { addItem } from '../actions';
export default function Table() {
    const arrProducts = useSelector((state) => state.products);
    const dispach = useDispatch();
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const add = () => {
        dispach(addItem({ id, name, picture, price }));
    }
    return (
        <div>
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">קוד</th>
                        <th scope="col">שם</th>
                        <th scope="col">תמונה</th>
                        <th scope="col">מחיר</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrProducts.map((x, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td><img src={`../../assets/${x.picture}`} style={{ width: '100px' }} /></td>
                                <td>{x.price}</td>
                                <td><Button variant="contained" id="btn" size="medium" onClick={() => navigate(`/editItem/${x.id}`)}>לעריכת המוצר</Button></td>
                            </tr>)
                    }
                </tbody>
            </table>
            <div>
                <h5>להוספת מוצר</h5>
                <TextField id="filled-basic" className='inp' label="קוד" variant="filled" onChange={(e) => { setId(e.target.value) }} />
                <TextField id="filled-basic" className='inp' label="שם" variant="filled" onChange={(e) => { setName(e.target.value) }} />
                <TextField id="filled-basic" type="picture" className='inp' label="תמונה" variant="filled" onChange={(e) => { setPicture(e.target.value) }} />
                <TextField id="filled-basic" type="number" className='inp' label="מחיר" variant="filled" onChange={(e) => { setPrice(e.target.value) }} />
                <TextField id="filled-basic" type="button" className='inp' value="הוספת המוצר" onClick={add} variant="filled" />
            </div>
        </div>
    )
}
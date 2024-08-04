import react from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../styleSheets/UserDetails.css'
export default function UserDetails(props) {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const onsubmit = () => {
        console.log(watch('name'));
        localStorage.setItem("user", JSON.stringify({ username: watch('name'), password: watch('password'), address: watch('address'), email: watch('email') }))
        props.setName(watch('name'));
    }
    return (
        <>
            <h4 id="h4">פרטי המשתמש</h4>
            <form onSubmit={handleSubmit(onsubmit)}>
                <TextField id="filled-basic" className='inp' label="שם" variant="filled" {...register('name', { require: true, pattern: '[a-zA-Zא-ת]' })} defaultValue={currentUser.username} />
                <br />
                {errors.name?.type === 'required' && <p>שם הוא שדה חובה</p>}
                {errors.name?.type == 'pattern' && <p>השם אינו בתבנית הנדרשת</p>}
                <TextField type="password" className='inp' id="filled-basic1" label="סיסמא" tlabel="סיסמא" variant="filled" {...register('password', { require: true })} defaultValue={currentUser.password} />
                <br />
                <TextField id="filled-basic2" className='inp' label="כתובת" variant="filled"  {...register('address', { require: true })} defaultValue={currentUser.address} />
                <br />
                <TextField type="email" id="filled-basic3" className='inp' label="מייל" variant="filled" {...register('email', { require: true, pattern: /^\S+@\S+$/i })} defaultValue={currentUser.email} />
                <br />
                {errors.email?.type === 'pattern' && <p>הכנס כתובת מייל תקינה</p>}
                <Button type="submit" variant="contained" id="btn" size="medium" className="inp">לעדכון הפרטים</Button>

            </form>
        </>
    );
}
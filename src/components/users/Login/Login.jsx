import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Link} from "react-router-dom";

import { login } from '../../../services/auth'

import './Login.scss';

const initialState = {
    email: '',
    password: ''
}

const Login = (props) => {  //recibe props para el history

    const [form, setForm] = useState(initialState)
    const [notUser, setNotUser] = useState(false);
    const handleInputChange = (event) =>{
        const {value, name} = event.target;
        setForm({...form, [name]: value});
    } 

    const submitForm = async(event) => {
        event.preventDefault();
        setNotUser(false);
        const response = await login(form)
        if(response.message) { //si la respuesta es true significa que hay user y podemos y al rss
            setNotUser(true)
        }else{
            props.history.push('/rss'); //redirigimos a la ruta RSS.
        }
    }

    const resetForm = () => {
        setForm(initialState)
    }

    return(
        <div>
       <form className="b-form" onSubmit={submitForm}>
                <div className="b-form__title">
                    LOGIN
                </div>
                    <p className="b-form__label">
                        <label>Nombre</label>
                    </p>
                    <input className="b-form__input" name="email" text="text" value={form.email} onChange={handleInputChange}/>
                
                <div>
                    <p className="b-form__label">
                        <label>Password</label>
                    </p>
                    <input className="b-form__input" name="password" type="password" value={form.password} onChange={handleInputChange} />
                </div>
                <div className="b-form__footer">
                    <Button className="b-button b-button__success" type="submit" >Accept</Button>
                    <Button className="b-button b-button__cancel" onClick={resetForm}>Reset</Button>
                </div>
            </form>

            <Link className="b-form__link" to="/register">Register</Link>
            {notUser && <p>El usuario no existe</p>}
        </div>
    )
}

export default Login;
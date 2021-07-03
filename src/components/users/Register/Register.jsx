import { useState} from 'react';
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { register } from '../../../services/auth';

import './Register.scss';

const initialState = {
    email: '',
    password: ''
}

const Register = (props) => {  //recibe props para el history

    const [form, setForm] = useState(initialState);
    const [error, setError] = useState(null);
    const handleInputChange = (event) =>{
        const {value, name} = event.target;
        setForm({...form, [name]: value});
    } 

    const submitForm = async(event) => {
        event.preventDefault();
        const data = await register(form)
        if(data.message) { //si la respuesta es true significa que hay user y podemos y al rss
            setError(data.message)
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
                    REGISTER
                </div>
                    <p className="b-form__label">
                        <label>Email</label>
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
            <Link className="b-form__link" to="/">Back</Link>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Register;
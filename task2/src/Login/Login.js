import React,  { useState }  from 'react';
import './Login.scss';
import Users from "../Users/Users";
import {Redirect} from "react-router-dom";

export default function Login({setIsLoggedInCrudadmin, isLoggedInCrudadmin}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        const isCrudadmin = username === 'crudadmin' && password === 'password';
        const isReadonlyAdmin = username === 'readonlyadmin' && 'password';

        const isLoggedIn = isCrudadmin || isReadonlyAdmin;
        if(!isLoggedIn){
            setValidationError('username does not exist or password is wrong');
        }
        setIsLoggedInCrudadmin(isLoggedIn);
    };

    if(isLoggedInCrudadmin){
        return <Redirect to={Users} />
    }else{
        return (
            <form className="loginForm" onSubmit={onFormSubmit}>
                <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="login" />

                { validationError && <div className="validationError">validationError</div> }
            </form>
        )
    };
}

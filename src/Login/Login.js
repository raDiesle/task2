import React,  { useState }  from 'react';
import './Login.scss';
import {Redirect} from "react-router-dom";

const Login = ({setIsLoggedInCrudadmin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const isCrudadmin = username === 'crudadmin' && password === 'password';
        const isReadonlyAdmin = username === 'readonlyadmin' && password === 'password';

        setIsLoggedIn(isCrudadmin || isReadonlyAdmin);
        if(!isLoggedIn){
            setValidationError('username does not exist or password is wrong');
        }
        setIsLoggedInCrudadmin(isCrudadmin);
    };

    if(isLoggedIn){
        return <Redirect to="/users" />;
    }else{
        return (
            <form className="loginForm" onSubmit={onFormSubmit}>
                <div>
                    <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="submitBtn">
                    <input type="submit" value="login" />
                </div>

                { validationError && <div className="inputError">{validationError}</div> }
            </form>
        )
    };
};

export default Login;

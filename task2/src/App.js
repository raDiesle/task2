import React, {useState} from 'react';
import './App.css';

import Login from "./Login/Login";
import Users from "./Users/Users";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

    const [isLoggedInCrudadmin, setIsLoggedInCrudadmin] = useState(false);
console.log(isLoggedInCrudadmin);
    return (

        <div className="layout">
            <header className="header">
                User Administration
            </header>
            <div className="content">
                <div className="view">
                    <Router>
                        <Route path="/" exact
                               render={(props) => <Login {...props} setIsLoggedInCrudadmin={setIsLoggedInCrudadmin}
                                                         isLoggedInCrudadmin={isLoggedInCrudadmin}/>}
                        />
                        <Route path="/login/"
                               render={(props) => <Login {...props} setIsLoggedInCrudadmin={setIsLoggedInCrudadmin}
                                                         isLoggedInCrudadmin={isLoggedInCrudadmin}/>}
                        />
                        <Route path="/users/"
                               render={(props) => <Users {...props} isLoggedInCrudadmin={isLoggedInCrudadmin}/>}/>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;

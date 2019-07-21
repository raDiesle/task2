import React, {useState, useEffect} from 'react';
import './UserDetails.scss';

import {countryConfigList} from "../Country/Country";

export default function UserDetails({userId, isLoggedInCrudadmin}) {
    const getUserDetailsObject = () => {
        return {
            1: {
                lastname: "Amend",
                country: "de",
                gender: "male",
                birthdate: "10.08.1985"
            },
            2: {
                lastname: "Amend2",
                country: "en",
                gender: "female",
                birthdate: "20.08.1985"
            },
            3: {
                lastname: "Amend3",
                country: "en",
                gender: "female",
                birthdate: "20.04.1985"
            },
            4: {
                lastname: "Amend4",
                country: "de",
                gender: "female",
                birthdate: "22.08.1985"
            }
        }
    };

    const [country, setCountry] = useState('');
    useEffect(() =>{
        if(userId === 0){
            return;
        }
        setCountry(getUserDetailsObject()[userId].country);
    }, [userId]);
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const [gender, setGender] = useState('male');
    useEffect(() =>{
        if(userId === 0){
            return;
        }
        setGender(getUserDetailsObject()[userId].gender);
    }, [userId]);
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [lastname, setLastname] = useState('');
    useEffect(() =>{
        if(userId === 0){
            return;
        }
        const lastname = getUserDetailsObject()[userId].lastname;
        setLastname(lastname);
    }, [userId]);
    const handleLastnameChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^a-z]/gi, '');
        setLastname(alphanumericValue);
    };


    if (userId === 0) {
        return <div className="userDetails"><h2>Please select user</h2></div>;
    }

    const currentDetails = getUserDetailsObject()[userId];


    const handleSaveClicked = () =>{

    };

    const hasValidationError = lastname.length === 0;

    return (
        <div className="userDetails">
            <h2>User Details of: {currentDetails.lastname}</h2>

            {
                isLoggedInCrudadmin ?
                (
                    <React.Fragment>
                        <div className={hasValidationError ? 'inputError' : ''}>
                            <div>Lastname:</div>
                            <input type="text" value={lastname} onChange={handleLastnameChange} />
                            {hasValidationError && <div>Lastname must not be empty</div>}
                        </div>
                        <div>
                            <div>Country: </div>
                        <select value={country} onChange={handleCountryChange} >
                            <option value="de" >{countryConfigList['de']}</option>
                            <option value="en" >{countryConfigList['en']}</option>
                        </select>
                        </div>
                        <div>
                            <div>Gender: </div>
                            Male:<input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                            Female:<input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                        </div>
                        <div>birthdate: {currentDetails.birthdate}</div>
                        <div>
                            <button type="button" disabled={hasValidationError} onClick={handleSaveClicked} >Save</button>
                        </div>
                    </React.Fragment>
                ) :
                (
                    <React.Fragment>
                        <div>{countryConfigList[currentDetails.country]}</div>
                        <div>{currentDetails.gender}</div>
                        <div>birthdate: {currentDetails.birthdate}</div>
                    </React.Fragment>

                )
            }


        </div>
    );
}

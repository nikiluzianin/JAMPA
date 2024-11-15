import LoginScreen from "./LoginScreen/LoginScreen2";
import React, { useState, useEffect } from 'react';
import { getAccessToken, login, checkAccessToken } from './AuthTokenApi/AuthTokenApi.js'  // used to get the token for API calls



const loginAction = () => {
    console.log("asd");
    login();
}


function NavigationTest() {

    const [token, setToken] = useState('1');

    useEffect(() => {
        const testToken = getAccessToken();
        console.log(testToken);
        setToken(getAccessToken());
    });



    return (
        <>
            <div>
                <LoginScreen click={loginAction} />
                {token}
            </div>

        </>
    )
}

export default NavigationTest
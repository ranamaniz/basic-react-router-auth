import React from 'react';
import { Button } from "../components/AuthForm";
import { Redirect } from 'react-router-dom';
import { useAuth } from "../context/auth";

function Admin(props) {
    const { setAuthTokens, authTokens } = useAuth();

    const logOut = () => {
        setAuthTokens();
    }

    const adminPanel = authTokens ?
        <>
            <div>Admin Page</div>
            <Button onClick={logOut}>Log out</Button>
        </>
        :
        <Redirect to="/" />

    console.log('authTokens from admin', authTokens);

    return (
        <div>
            {
                adminPanel
            }
            {/* <>
                <div>Admin Page</div>
                <Button onClick={logOut}>Log out</Button>
            </> */}
        </div>
    )
}

export default Admin;

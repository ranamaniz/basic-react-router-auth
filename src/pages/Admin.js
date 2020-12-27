import React from 'react';
import { Button, ButtonPrimary } from "../components/AuthForm";
import { Redirect } from 'react-router-dom';
import { useAuth } from "../context/auth";

function Admin(props) {
    const { setAuthTokens, authTokens } = useAuth();

    const logOut = () => {
        setAuthTokens();
    }

    const adminPanel = authTokens ?
        <>
            <div>Welcome to the Admin Page</div>
            <ButtonPrimary onClick={logOut}>Log out</ButtonPrimary>
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

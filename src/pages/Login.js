import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Logo, Card, Error } from '../components/AuthForm';
import logoImg from '../img/logo.jpg';
import { useAuth } from '../context/auth';
import axios from 'axios';


const Login = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens, authTokens } = useAuth();

    const referer = props.location.state?.referer || '/';

    const postLogin = (event) => {
        
        event.preventDefault();
        axios.post("https://reqres.in/api/login", {
            email,
            password,
        }).then(resp => {
            console.log('resp', resp)
            if (resp.status == 200) {
                setAuthTokens(resp.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true)
        });
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <form onSubmit={postLogin}>
                <Form
                // onSubmit={postLogin}
                >
                    <Input
                        type="email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        placeholder="email"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                    />
                    <Button
                    // onClick={postLogin}
                    >
                        Sign In
                </Button>
                </Form>
            </form>

            <Link to="/signup">Don't have an account? SignUp Now</Link>
            {isError && <Error>The email or password provided were incorrect !</Error>}
        </Card>
    )
}

export default Login

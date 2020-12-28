import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Logo, Card, Error } from '../components/AuthForm';
import logoImg from '../img/logo.jpg';
import { useAuth } from '../context/auth';
import axios from 'axios';


const Signup = () => {
    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="email" placeholder="image" />
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="password again" />
                <Button>Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account? SignIn</Link>
        </Card>
    )
}

export default Signup



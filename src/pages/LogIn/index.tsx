import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { Title, Form, Input, Button, SignUp, NUllButton } from '@LogIn/style'

import useInput from '@hooks/useInput';
import axios from 'axios';
const LogIn = () => {

    const navigate = useNavigate();

    const [email, onChangeEmail, setEmail] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');

    const onSubmit = useCallback(

        (e: any) => {
            axios.post('http://localhost:8080/booklog/member/log-in', {
                email: email,
                password: password
            })
                .then((response) => {
                    console.log(response.data);
                    goToHome();

                })
                .catch((error) => {
                    console.log(error.response)
                })

        }, [email, password]

    );

    const goToSignUp = () => {
        navigate("/signup")


    }

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div id="Log-InContainer">
            <Title>Book;Log</Title>

            <Form onSubmit={onSubmit}>
                <Input
                    type='email'
                    value={email}
                    placeholder='email'
                    onChange={onChangeEmail}
                />
                <Input
                    type='password'
                    value={password}
                    placeholder='password'
                    onChange={onChangePassword}
                />
                <Button>log-in</Button>

            </Form>
            <NUllButton onClick={goToSignUp}>
                <SignUp>회원이 아니시라면</SignUp>
            </NUllButton>


        </div>

    );

}

export default LogIn;
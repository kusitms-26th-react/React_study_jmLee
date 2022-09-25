import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router';

import { Title, Form, Input, Button, SignUp, NUllButton } from '@LogIn/style'
import useSWR from 'swr';
import useInput from '@hooks/useInput';
import axios from 'axios';
import fetcher from '@utils/fetcher';
const LogIn = () => {

    const navigate = useNavigate();

    //const { data, error, revalidate, mutate } = useSWR('/home', fetcher)

    const [email, onChangeEmail, setEmail] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');

    const onSubmit = useCallback(

        (e: any) => {
            e.preventDefault();
            axios.post('http://localhost:8080/booklog/member/log-in', {
                email: email,
                password: password
            }, {
                withCredentials: true,
            })
                .then((response) => {
                    goToHome();
                    console.log(response.data);// 이 repsonse.data가 swr의 data가 됨


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
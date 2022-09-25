import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router';

import { Title, Form, Input, Button, SignUp, NUllButton } from '@LogIn/style'
import useSWR from 'swr';
import useInput from '@hooks/useInput';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import { setCookie } from '@/utils/cookie';

axios.defaults.withCredentials = true;
const LogIn = () => {



    const navigate = useNavigate();

    //const { data, error, revalidate, mutate } = useSWR('/home', fetcher)

    const [email, onChangeEmail, setEmail] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');


    const onSubmit = useCallback(

        (e: any) => {
            e.preventDefault();
            axios.post('http://localhost:8080/login', { email, password }, { withCredentials: true })
                .then((response) => {
                    //로그인 하면 발행한 jwt를 헤더에 넣어줌
                    const { accessToken } = response.data.result.jwt;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    setCookie('loginCookie', response.data.result.jwt);
                    navigate('/', {
                        state: {
                            id: response.data.result.id,
                            name: response.data.result.name
                        }
                    })
                    console.log(response.data);// 이 repsonse.data가 swr의 data가 됨




                })
                .catch((error) => {
                    console.log(error.response.data)
                })

        }, [email, password]

    );

    const goToSignUp = () => {
        navigate("/signup")


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
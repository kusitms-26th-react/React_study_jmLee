
import React from 'react'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useInput from '@hooks/useInput';
import { Logo, Input, Form, Button, Title } from '@SignUp/styles'
import logo1 from "@img/logo1.png"

// 회원가입 틀을 짠다.
// axios를 달아준다
// validation처리해주기 
const Signup = () => {
    const navigate = useNavigate();

    const [name, onChangeName, setName] = useInput('');
    const [email, onChangeEmail, setEmail] = useInput('');
    const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');



    const goToHome = () => {
        navigate('/');

    }
    const onSubmit = useCallback(
        (e: any) => {
            e.preventDefault();
            axios.post('http://localhost:8080/user', {
                name: name,
                email: email,
                phoneNum: phoneNum,
                password: password
            })
                .then((response) => {
                    goToHome();
                    console.log(response)



                })
                .catch((error) => {
                    console.log(error.response);
                })

        }, [name, email, phoneNum, password]
    );






    return (
        <div id="signUpContainer">
            <Logo onClick={goToHome}>
                <img src={logo1} />
            </Logo>
            <Title>Sign Up</Title>
            <br></br>
            <Form onSubmit={onSubmit}>
                <Input type='text'
                    placeholder='name'
                    value={name}
                    onChange={onChangeName}

                />

                <Input type='email'
                    placeholder='email'
                    value={email}
                    onChange={onChangeEmail}

                />

                <Input type='tel'
                    placeholder='phoneNumber'
                    value={phoneNum}
                    onChange={onChangePhoneNum}
                />

                <Input type='password'
                    placeholder='password'
                    value={password}
                    onChange={onChangePassword}

                />

                <Button type="submit">SignUp</Button>
            </Form>



        </div >
    );
}

export default Signup;
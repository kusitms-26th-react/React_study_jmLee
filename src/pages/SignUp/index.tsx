
import React from 'react'
import { useState, useCallback } from 'react'
import axios from 'axios'
import useInput from '@hooks/useInput';
import { Input, Form, Button, Title } from '@SignUp/styles'


// 회원가입 틀을 짠다.
// axios를 달아준다
// validation처리해주기 
const Signup = () => {

    const [name, onChangeName, setName] = useInput('');
    const [email, onChangeEmail, setEmail] = useInput('');
    const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');


    const onSubmit = useCallback(
        (e: any) => {
            e.preventDefault();
            axios.post('http://localhost:8080/booklog/member', {
                name: name,
                email: email,
                phoneNum: phoneNum,
                password: password
            })
                .then((response) => {
                    console.log(response)

                })
                .catch((error) => {
                    console.log(error.response);
                })

        }, [name, email, phoneNum, password]
    );






    return (
        <div id="signUpContainer">
            <Title>Book;Log</Title>
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
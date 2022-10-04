import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router';

import { Title, Form, Input, Button, SignUp, NUllButton } from '@LogIn/style'

import useInput from '@hooks/useInput';
import axios from 'axios';

import { setCookie } from '@/utils/cookie';

axios.defaults.withCredentials = true;
const LogIn = () => {


    const [accessToken, setAccessToken] = useState("");
    const navigate = useNavigate();





    const [logInError, setLogInError] = useState(false);
    const [email, onChangeEmail, setEmail] = useInput('');
    const [password, onChangePassword, setPassword] = useInput('');



    const onSubmit = useCallback(

        (e: any) => {
            e.preventDefault();
            axios.post('http://localhost:8080/login', { email, password }, { withCredentials: true })
                .then((response) => {
                    //로그인 하면 발행한 jwt를 헤더에 넣어줌
                    setAccessToken(response.data.result.jwt);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;//jwt가 필요할때 넣어주면 됨
                    console.log(accessToken);
                    setCookie('loginCookie', response.data.result.jwt);


                    //result code가 1000일 떄 navigate하기 
                    if (response.data.code === 1000) {
                        navigate('/', {
                            state: {
                                id: response.data.result.id,
                                name: response.data.result.name
                            }
                        })
                        console.log(response.data);
                    }



                })
                .catch((error) => {
                    setLogInError(error.response?.data?.statusCode === 401);
                    console.log(error.response.data)
                })

        }, [email, password]

    );

    const goToSignUp = () => {
        navigate("/signup")


    }
    // if (data === undefined) {
    //     //가져온 데이터가 false일 수도 있기에 data==undefined로(가져온 데이터가 false인 경우는 로그인 상태가 아닌 경우)
    //     return <div>로딩중...</div>; //중간에 회원가입 페이지 안보이게 하기 위함
    // }



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
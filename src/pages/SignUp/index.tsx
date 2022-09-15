
import React from 'react'
import { useState, useCallback } from 'react'
import useInput from '@hooks/useInput';

const Signup = () => {

    const [name, onChangeName, setName] = useInput('');
    const [email, onChangeEmail, setEmail] = useInput('');
    const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput('');

    const onSubmit = () => {

    }





    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={onSubmit}>
                <input type='text'
                    placeholder='name'
                    value={name}
                    onChange={onChangeName}

                />
                <br />
                <input type='email'
                    placeholder='email'
                    value={email}
                    onChange={onChangeEmail}

                />
                <br />
                <input type='tel'
                    placeholder='phoneNumber'
                    value={phoneNum}
                    onChange={onChangePhoneNum}
                />
                <br />
                <button type="submit">submit</button>
            </form>
        </div >
    );
}

export default Signup;
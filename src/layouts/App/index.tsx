import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '@SignUp/index';
import LogIn from '@LogIn/index'
import Home from '@Home/index';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />

        </Routes >
    );

}
export default App;
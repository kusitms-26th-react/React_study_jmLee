import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '@SignUp/index';
import LogIn from '@LogIn/index'
import Home from '@Home/index';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            },
        },
    }
);
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />

            </Routes >
        </QueryClientProvider>
    );

}
export default App;
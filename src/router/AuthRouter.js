import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import '../css/login-register.css';



export const AuthRouter = () => {
    return (

        <div className="container-login100">
                <div className="limiter">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />

                        <Route path="/*" element={<Navigate replace to="login" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

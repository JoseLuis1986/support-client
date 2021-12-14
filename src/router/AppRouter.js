import React, { useContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext);

    useEffect(() => {

        verifyToken();

    }, [verifyToken])

    if (auth.checking) {
        return <h1>Espere por favor!!</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter />\
                    </PublicRoute>
                }
                />

                <Route path="/" element={
                    <PrivateRoute>
                        <ChatPage />
                    </PrivateRoute>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}

            // <BrowserRouter>
            //     <Routes>
            //         <Route path="/auth/*" element={<AuthRouter/>} />
            //         <Route path="/" element={<ChatPage />} />

            //         <Route path="*" element={<Navigate replace to="/"/>} />
            //     </Routes>
            // </BrowserRouter>
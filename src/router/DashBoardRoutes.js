import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { ChatPage } from '../pages/ChatPage';
import { CreateTicket } from '../pages/CreateTicket';
import { Dashboard } from '../pages/Dashboard';
import { NotesPage } from '../pages/NotesPage';



export const DashBoardRoutes = () => {
    return (
        <>
            {/* <Navbar history={ history } /> */}
            <Navbar />

            <div className="container mt-2">
                <Routes>
                     <Route path="/" element={<Dashboard />}/>
                     <Route path="/chat" element={<ChatPage />}/>
                     <Route path="/tickets" element={<CreateTicket />}/>
                     <Route path="/notes" element={<NotesPage />}/>
                </Routes>
            </div>
        </>
    )
}

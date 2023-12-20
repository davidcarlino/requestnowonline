import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Pin from "./pages/Pin/Pin";
import Login from "./pages/Login/login";
import QrScan from "./pages/QrScan/qr-scan";


export default function MainRouter() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/home' element={ <Navigate to='/'/> }/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route exact  path='*' element={<Navigate to='/404'/>}/>
                <Route path='/pin' element={<Pin/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/qr-scan' element={<QrScan/>}/>
            </Routes>
        </div>
    )
}
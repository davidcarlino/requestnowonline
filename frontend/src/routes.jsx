import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";


export default function MainRouter() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/home' element={ <Navigate to='/'/> }/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route exact  path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </div>
    )
}
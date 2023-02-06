import React from 'react';
import Home from './Page/Home';
import Login from './Page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;

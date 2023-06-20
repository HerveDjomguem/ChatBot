import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './chatbot/Admin';
import Chatbot from './chatbot/Chatbot';
import Auth from './chatbot/Auth';


const App = () => (
        <div>
            <Router>
            <div className='container'>
      
            <Routes>
                    <Route exact path="/admin" element={<Admin/>} />
                    <Route exact path="/chatbot" element={<Chatbot/>} />
                    <Route exact path="" element={<Auth/>} />
                </Routes>
               
             </div>
            </Router> 
        </div>
    );


export default App;
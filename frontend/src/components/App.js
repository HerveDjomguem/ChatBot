import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';

const App = () => (
        <div>
            <Router>
            <div className='container'>
                <Chatbot/>
             </div>
            </Router> 
        </div>
    );


export default App;
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import React from 'react';
import UserProfile from './popup/UserProfile';

const App: React.FC = () => {
    return (
        <div>
            <UserProfile />
        </div>
    );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/examples/Example';
import Header from './components/header/Header'; // Import the Header component

ReactDOM.render(
    <div>
        {/* Include the Header component */}
        <Header />

        {/* Render the Example component */}
        <Example />
    </div>,
    document.getElementById('reactapp'),
);

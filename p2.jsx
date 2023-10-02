import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header'; // Import the Header component
import States from './components/states/States';

ReactDOM.render(
    <div>
        {/* Include the Header component */}
        <Header />

        {/* Render the States component */}
        <States />
    </div>,
    document.getElementById('reactapp'),
);

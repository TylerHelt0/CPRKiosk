//Javascript entry point for app
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.jsx';

//Render App react component on on HTML element with id 'root', 
//setting up react virtual DOM
ReactDOM.render(<App />, document.getElementById('root'));
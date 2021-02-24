import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function display(){
    let element = <App sentence="This is starting to make a little sense" />;
    ReactDOM.render(element, document.getElementById('root'));
}
display();
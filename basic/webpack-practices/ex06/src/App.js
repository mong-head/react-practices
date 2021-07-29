import './assets/scss/App.scss';
import logo from './assets/images/logo.svg'

// DOM API
const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.className = "App";           // h1 node class
    app.innerHTML = 
    `<header class='App-header'>
       <img src='${logo }' class='App-logo' alt='logo' />
       <p>Hello World</p>
    </header>`;

    return app;
}

export {App}
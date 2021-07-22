import './assets/css/App.css';

// DOM API
const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.classname = "Header";           // h1 node class
    app.textContent = 'Hello world4'; // text node
    return app;
}

export {App}
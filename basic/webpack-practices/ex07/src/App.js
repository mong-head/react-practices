import contents from './hello.txt'

// DOM API
const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.textContent = contents.text;

    return app;
}

export {App}
# Integration

* 개발환경 통합 (배포의 통합 X)
    * React(Frontend) Integration with Node(Backend)
    * Application
        * Backend : Node.js
            * API
        * Frontend : React
        * 통신(3rd party)
            * XmlHttpRequest (ES3)(거의 안씀)
            * ajax (jQuery)
            * Fetch (ES5)
            * AXIOS :star:

* development 시에 서로 다른 port 사용하는 server 동시에 띄움 -> proxy 필요
    * backend : nodemon server(port:8888) 사용
    * frontend : webpack dev server(port:9999) 사용

## Configuration

* Application(Project) Structure
    ```text
    /app
      |--- /backend
      |        |--- index.js
      |        |--- /public
      |        |       |--- /assets         [frontend build한 assets]
      |        |--- /logging
      |        |       |--- index.js
      |        |--- /routes
      |        |       |--- index.js
      |        |       |--- authorized.js
      |        |       |--- error.js
      |        |--- /controllers
      |        |--- /models
      |        |--- /views
      |        |       |--- /error
      |        |               |--- [404.ejs]
      |        |               |--- [500.ejs]
      |        |--- app.config.env
      |--- /frontend
      |        |--- /src
      |        |--- /config
      |        |       |--- babel.config.json
      |        |       |--- webpack.config.json
      |        |--- /public
      |        |--- /assets
      |        |       |--- favicon.ico
      |        |       |--- index.html
      |--- /node_modules
      |--- package.json
      |--- package-lock.json
    ```
* nodemon
* webpack dev server
* package JSON
* node application

## Application

### AJAX(fetch, axios)

* App01.[Emaillist(node + react)](emaillist)
    * 개발 통합 설정(with Node Backend)
    * Backend: Fully API Server(Node Express 기반)
    * Frontend : React(SPA)
    * AJAX : fetch 기반
* App02.[Kanban (node + react)](kanban)
    * 개발 통합 설정(with Node Backend)
    * Backend: Fully API Server(Node Express 기반), DB는 있는 척!
    * Frontend : React(SPA)
    * AJAX : fetch 기반
* App03.Guestbook(node + react)
* App04.[Gallery(node + react)](gallery)
* mysite(App03 + App04)
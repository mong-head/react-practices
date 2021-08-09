# Emaillist

## Project

* 설치
    * 추가 : concurrently; nodemon, webpack serve 둘다 띄우기 위함
    * backend
        * @babel/plugin-transform-runtime : await 등 변환
            * babel.config.json
                ```json
                "plugins": ["@babel/plugin-transform-runtime"]
                ```
* scripts
    * build : client 용

* webpack.config.js
    * proxy 설정
        ```js
            devServer: {
            contentBase: path.resolve('frontend/public'),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            proxy: {
                '/api': 'http://localhost:8888'
            },
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
        ```

* EmaillistApp(frontend)에서 api(backend) 연결
    * EmaillistApp 추가한 것
        ```js
        const [emails, setEmails] = useState([]);

        useEffect(async() => {
            try{
                // backend 로 보내기
                const response = await fetch('/api', {
                    method: 'get',
                    mode: 'same-origin', //cors: 다른 도메인인 경우, same-origin: 같은 도메인인 경우
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: null
                });
                if(!response.ok){
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }
                console.log(json.data);
                setEmails(json.data);
            } catch(e){
                console.log(e);
            }
        }, []); // mount
        ```

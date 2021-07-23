# babel Env preset

* babel-cli가 babel-core사용해서 transpile(변환) : ES6 -> ES5
    * 하나의 preset만으로 한번에 바꾸기
    * preset : 관련 plugin 들을 한 번에 적용하게 위해 그 plugin들 모아놓은 것
        * ECMAScript 년도별로 모아 놓은 것들
        * stage (0,1,2,3) level 별로 모아놓은 것들
        * 3rd party preset 등 여러 종류 有

## project

* 생성
    ```bash
    npm init -y
    ```

* 설치
    ```bash
    npm i -D @babel/core @babel/cli 

    ## preset
    npm i -D @babel/preset-env
    ```
    * Env preset : stage 3 level 이상 문법 plugin 설치
        * babel.confing.json : 다양하고 편리하게 설치되는 plugin 설정 가능 

* plugin list 확인

    ```bash
    npm list --depth=1 | grep "@babel/plugin"
    ```

## src file

* ES6으로 작성
* [src/ex01.js](src/ex01.js)

## config & result 

* 실행할때는 적용할 설정을 ```babel.config.json```으로 수정해서 하기

* [babel.config.01.json](babel.config.01.json)
    * config
        ```json
        {
            "presets": [["@babel/preset-env",{
                "targets": {
                    "node": "current"
                }
            }]]
        }
        ```
        * 최신 버전  변환
    * 적용
         ```bash
        npx babel src/ex01.js -o dist/ex01.01.js
        ```
    * result
        * 변환X (이미 최신 버전)

* [babel.config.02.json](babel.config.02.json)
    * config
        ```json
        {
        "presets": [["@babel/preset-env",{
                "targets": {
                    "node": "current"
                }
            }]
        ],
        "plugins": [
            "@babel/plugin-transform-block-scoping",
            "@babel/plugin-transform-parameters",
            "@babel/plugin-transform-template-literals",
            "@babel/plugin-transform-for-of"]
    }
        ```
        * 최신 버전 변환, but plugin 적용
    * 적용
         ```bash
        npx babel src/ex01.js -o dist/ex01.02.js
        ```
    * result
        * 저 플러그인들 적용됨
        
* [babel.config.03.json](babel.config.03.json)(:star:)
    * config
        ```json
        {
            "presets": [["@babel/preset-env",{
                    "targets": {
                        "IE": "11",
                        "edge":"89",
                        "firefox":"92",
                        "chrome":"90",
                        "opera":"76",
                        "safari":"15"
                    }
                }]
            ]
        }
        ```
        * [browser별 ES6 호환 table 참고: 버전 확인](https://kangax.github.io/compat-table/es6)

    * 적용
         ```bash
        npx babel src/ex01.js -o dist/ex01.03.js
        ```
    * result
        * ie 11 target을 잡지 않으면 변환 X
        * ie 11 target으로 잡으면 ES5로 변환됨


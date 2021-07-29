# Kanban Board

* Methodology
    * Waterfall

        <img src="https://www.smartsheet.com/sites/default/files/waterfall%402x.png" width="30%">

        * 문제점
            * 과정마다 항상 문제가 생김
            * 일정이 미루어질 수 있음
    * Agile
        * Kanban board

            <img src="https://djaa.com/wp-content/uploads/2020/12/iStock-1282375527.jpg" width="30%">
            
            * story board 하나 짜놓은 것으로 ToDo list 작성
                * To do list : task마다 가중치 부여
                * project 진행 과정 

                    <img src="../../image/kanban.jpg" width="30%">

            * Trello 많이 사용
        * 장점
            * 기간에 대해 불만 X
        * 문제점
            * 중간에 어디까지 했는지 확인이 어려움 -> CI tool 필요함
            * 해결
                * CI tool 필요
                    * Jenkins - 고객이 바로바로 어떻게 구현했는지 test용으로 볼 수 있게 하는 것 필요
                * TDD 필요

## Project

* dependency
    ```json
     "devDependencies": {
        "@babel/cli": "^7.14.8",
        "@babel/core": "^7.14.8",
        "@babel/preset-env": "^7.14.8",
        "@babel/preset-react": "^7.14.5",
        "babel-loader": "^8.2.2",
        "css-loader": "^6.2.0",
        "file-loader": "^6.2.0",
        "style-loader": "^3.2.1",
        "webpack": "^5.46.0",
        "webpack-cli": "^4.7.2",
        "webpack-dev-server": "^3.11.2"
    },
    "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2"
    }
    ```
* src

    * ex01
        * component 작성
            * component

                <img src="../../image/kanban_components.jpg" width="30%">

                * KanbanBoard.js -> CardList.js -> Card.js -> TaskList.js -> Task.js
        * result

            <img src="../../image/kanban_result_1.jpg" width="15%">

    * ex02
        * styling module : css 모듈화
        * use
            * import
                ```js
                import styles from '../assets/css/Card.css';
                ```
            * use
                ```js
                <div className={styles.Card}>
                ```
        * result

            <img src="../../image/kanban_result.jpg" width="40%">

## Usage

```bash
npm run debug src={src_no}
```
* ex : ```npm run debug src=ex02```
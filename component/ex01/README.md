# Component - Property: Component 작성

## Learn what

### 01. props(Property)

1. Component Data(Component Info)
2.  Data Flow, Component Communication(Component 간의 통신)
    * component 간의 통신은 부모 자식간에만 가능
    * Top-down : Parent Component -> Child Component
3. Child: property 변경 불가
    * parent component : wirte,read (own)
    * child component : read only

### 02. FoodList [src/01](src/01): Class Component

* Tip
    * [_index.html](public/_index.html): 미리 어떤 방식으로 화면 구성되어야 하는지 테스트용

* [App.js](src/01/App.js) -> [FoodList](src/01/FoodList.js) -> [ListItem](src/01/ListItem.js)

* Property : Parent 소유
    * (Parent): write props ```<ListItem name='bread' quantity='50'/>```
    * (Child) : use props ```<li>{this.props.name} : {this.props.quantity}</li>```

### 03. FoodList [src/02](src/02): Data Flow with Class Component

* App.js의 data flow 보기: [App.js](src/02/App.js) -> [FoodList](src/02/FoodList.js) -> [ListItem](src/02/ListItem.js)
    * ```App.js```: ```<FoodList foods={this.foods}/>```
    * ```FoodList.js```: ```{this.props.foods.map((food)=><ListItem key={food.no} name={food.name} quantity={food.quantity} />)}```
    * ```ListItem.js```: ```<li>{this.props.name} : {this.props.quantity}</li>```

### 04. FoodList [src/03](src/03): Data Flow with Function Component(:star:)

* 요즘, 함수형 프로그래밍이 대세!

* [App.js](src/03/App.js) -> [FoodList](src/03/FoodList.js) -> [ListItem](src/03/ListItem.js)

* class와 다르게 this X, 변수 넘겨줄 수 있음
    * ```<FoodList foods={foods}/>``` -> ```export default function FoodList(props){ //props.foods```

### 05. Property Validation(Design) [src/04](src/04)

* 설치
```bash
npm i -D prop-types
```
* property validation 
* property 받은거 제어
    * property type 제어하기

## project

* basic/ex08의 package.json, package-lock.json 복사
    * module 설치 : ```npm i```

* scripts (package.json)
    ```json
    "scripts": {
        "build": "npx webpack --mode production",
        "debug": "npx webpack server --progress --mode development --env"
    },
    ```
    * env : env줘서 원하는 예제 source 실행 가능
* config
    * [webpack.config.js](webpack.config.js)
        * env 변수 입력받음 -> 함수화
        ```js
        const path = require("path");

        module.exports = (env) => {
        const entry = path.resolve(`src/${env.src}/index.js`);
            return {
                mode: "none",
                entry: entry,
                output: {
                path: path.resolve("public"),
                filename: "bundle.js",
                },
                module: {
                rules: [
                    {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        { loader: "css-loader", options: { modules: true } },
                    ],
                    },
                    {
                    test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
                    loader: "file-loader",
                    options: {
                        outputPath: "/assets/images",
                        name: "[name].[ext]",
                    },
                    },
                    {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    },
                ],
                },
                devtool: "eval-source-map",
                devServer: {
                contentBase: path.resolve("public"),
                watchContentBase: true,
                host: "0.0.0.0",
                port: 9999,
                inline: true,
                liveReload: true,
                hot: false,
                compress: true,
                historyApiFallback: true,
                },
            };
        };
        ```

## (Useage)Run Examples

```bash
npm run debug src={no}
```
* src의 01예제 실행하고 싶은 경우 : ```npm run debug src=01```
 
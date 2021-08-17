## React Routing

### [ex01](src/ex01) : React Router Basic I : HashRouter Component
[App.js](src/ex01/App.js)
```js
import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Gallery from './component/Gallery';
import Main from './component/Main';
import Guestbook from './component/Guestbook';

export default function () {
    return (
        <HashRouter>
            <Route exact path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/gallery' component={Gallery} />
        </HashRouter>
    );
}
```
* Main : ```localhost:9999/#/```
* Guestbook : ```localhost:9999/#/guestbook```
* Gallery : ```localhost:9999/#/gallery```

### [ex02](src/ex02) : React Router Basic II : Link vs NavLink Component   
* Link
    * HTML 변환: ```<a href="#/">[Main]</a>```
    * [ex01/Main.js](src/ex01/component/Main.js)
        ```js
        import React from 'react';
        import {Link} from 'react-router-dom';

        export default function Main(){
            return (
                <div>
                    <h1>Main</h1>
                    <ul>
                        <li><Link to={'/'}>[Main]</Link></li>
                        <li><Link to={'/guestbook'}>[Guestbook]</Link></li>
                        <li><Link to={'/gallery'}>[Gallery]</Link></li>
                    </ul>
                </div>
            )
        }
        ```
* NavLink
    * UI 적으로 더 Good
    * HTML
        * 현재 페이지인 경우: ```<a aria-current="page" class="active" href="#/">[Main]</a>```
        * 다른 페이지인 경우: ```<a href="#/guestbook">[Guestbook]</a>```
    * [ex02/Main.js](src/ex01/component/Main.js)
        ```js
        import React from 'react';
        import {NavLink} from 'react-router-dom';

        export default function Main(){
            return (
                <div>
                    <h1>Main</h1>
                    <ul>
                        <li><NavLink to={'/'}>[Main]</NavLink></li>
                        <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
                        <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                    </ul>
                </div>
            )
        }
        ```

### [ex03](src/ex03) : Styling & Semantic MarkUp

```html
<div id='root'>
    <div id='header'>
    </div>

    <div id='contents'>
    </div>

    <div id='navigation'>
    </div>

    <div id='footer'>
    </div>

</div>
```
* 여기에서 navigation에 해당하는 부분 Link로 이동하며 Routing 필요

### ex04 : Composition(합성)
### ex05 : Nesting Route(경로 내포)

### 설치
``` bash
    $ npm i react-router-dom
```


### 실행
```bash
    $ npm run debug src=[ex01|ex02|ex03|...]
```
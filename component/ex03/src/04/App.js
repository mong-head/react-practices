import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);  // useRef : hook function

    const onKeyPressInput = function(e){
        // enter 치면 출력
        if(e.key == 'Enter'){
            console.log('onKeyPressInput');
            //e.target.value = '';          // bad
        }
    }
    const onFocusInput = function(e){
        console.log('onFocusInput')
    }
    const onBlurInput = function(e){
        console.log('onBlurInput')
    }
    const onMouseOverImage = function(e){
        console.log('mouse over',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseMoveImage = function(e){
        const offsetTop = imageRef.current.offsetTop;       // imageRef.current : Real DOM element
        const offsetLeft = imageRef.current.offsetLeft; 
        
        // image안에서 절대 좌표 구하기
        console.log('mouse move',`x=${e.clientX - offsetLeft }, y=${e.clientY - offsetTop }`);
    }
    const onMouseOutImage = function(e){
        console.log('mouse out',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseDownImage = function(e){
        console.log('mouse down',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseUpImage = function(e){
        console.log('mouse up',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onClickImage = function(e){
        console.log('mouse click image',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onDoubleClickImage = function(e){
        console.log('onDoubleClickImage')
    }


    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './assets/Form.css';

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('male');
    const [birthYear,setBirthYear] = useState(1984);
    const [selfDescription, setSelfDescription] = useState('');

    const onchangeInputName = function(e){
        // validation
        // 열자 이상 제한
        setName(e.target.value.substr(0,10));
    }

    const onchangeInputEmail = function(e){
        setEmail(e.target.value);
        // validation : email 형식
        const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        setValidEmail(re.test(e.target.value));
    }

    const onchangeInputPassword = function(e){
        // validation
        setPassword(e.target.value);
    }

    const onChangeInputGender = function(e){
        setGender(e.target.value);
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={ name } onChange={ onchangeInputName } />

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={ email } onChange={ onchangeInputEmail }/>
            {
                email === '' ?
                    null :    
                    validEmail ? 
                        <FontAwesomeIcon icon={ faCheckCircle } style={ { marginLeft: 5, fontSize: 16, color: "blue" } }/> :
                        <FontAwesomeIcon icon={ faTimesCircle } style={ { marginLeft: 5, fontSize: 16, color: "red" } }/>
            } 

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ password } onChange={ onchangeInputPassword }/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } checked={ gender === 'female' } onChange={ onChangeInputGender } />
                <label>남</label> <input type="radio" name="gender" value={ "male" } defaultChecked={ gender === 'male' } onChange={ onChangeInputGender } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value={ birthYear } onChange={ e => setBirthYear(e.target.value)}>
                <option value={ 1984 }>1984년</option>
                <option value={ 1985 }>1985년</option>
                <option value={ 1986 }>1986년</option>
                <option value={ 1987 }>1987년</option>
                <option value={ 1988 }>1988년</option>
                <option value={ 1989 }>1989년</option>
                <option value={ 1990 }>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea id='selfDescription' name='selfDescription' value={selfDescription} onChange={ e => setSelfDescription(e.target.value)} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { "yes" } defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}
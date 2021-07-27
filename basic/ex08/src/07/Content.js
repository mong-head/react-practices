import React ,{Component, Fragment} from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

export default class extends Component{
    render(){
        const str = '특징 4: Blank space (공백)';
        return (
            <Fragment>
                <p>{str}</p>
                <Clock01 />
                <Clock02 />
            </Fragment>
        );
    }
}
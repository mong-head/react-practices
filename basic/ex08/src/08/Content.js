import React ,{Component, Fragment} from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

export default class extends Component{
    render(){
        const str = 'Dynamic HTML Rendering';
        return (
            <Fragment>
                <p>{str}</p>
                <Clock01 />
                <Clock02 />
            </Fragment>
        );
    }
}
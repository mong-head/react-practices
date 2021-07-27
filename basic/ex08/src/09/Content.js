import React ,{Component, Fragment} from 'react';
import Clock from './Clock';

export default class extends Component{
    render(){
        const str = 'Comment';
        return (
            <Fragment>
                <p>{str}</p>
                <Clock />
            </Fragment>
        );
    }
}
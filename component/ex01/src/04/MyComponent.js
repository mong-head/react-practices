import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default function MyComponent({ props01, props02, props03, props04, props05, props06, props07, props08, props09 }){
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <div>props01 : {props01 ? props01 : '---not set---'}</div>
            <div>props02 : {props02 ? props02 : '---not set---'}</div>
            <div>props03 : {props03 ? `${props03}` : '---not set---'}</div>
            <div>props04 : {props04 ? props04.no : '---not set---'}</div>
            <div>props05 : {props05 ? props05.map((e,i)=>{<b key={i}>{e}{' '}</b>}) : '---not set---'}</div>
            <div>props06 : {props06 ? props06() : '---not set---'}</div>
            <div>props07 : {props07 ? props07 : '---not set---'}</div>
            <div>props08 : {props08 ? props08.map((e,i)=>{ e ? <b key={i}>{'true'}{' '}</b> : <b key={i}>{'false'}{' '}</b>}) : '---not set---'}</div>
            <div>
                props09 : {props09 ? 
                                <div>
                                    <h3>{props09.no}</h3>
                                    <h4>{props09.name}</h4>
                                    <h5>{props09.email}</h5>
                                </div> 
                                : '---not set---'}
            </div>
        </Fragment>
    );
}

MyComponent.propTypes = {
    // [Built-in propTypes Validator: primitives]
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // [Built-in propTypes Validator: combined primitives]
    props07: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired, // boolean array여야함
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

// Default Value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 2,
    props03: true,
    props04: [],
    props05: [],
    props06: () => {} //dummy func
}
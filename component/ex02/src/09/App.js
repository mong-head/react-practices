import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAnchor,faBell,faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons'; //svg image 가지고 오기
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function App(){
    library.add(faBell,farBell,fab);
    return (
        <Fragment>
            <h2>React Awesome Font Examples</h2>

            <h3>1. solid</h3>
            {/* solid */}
            <FontAwesomeIcon icon={faAnchor}/>
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={["fa","bell"]}/>
            <FontAwesomeIcon icon={faBell} size='xs'/>
            <FontAwesomeIcon icon={ faBell } size='lg'/>
            <FontAwesomeIcon icon={ faBell } size='2x'/>
            <FontAwesomeIcon icon={ faBell } size='3x'/>
            <FontAwesomeIcon icon={ faBell } size='4x'/>

            <h3>2. Regular</h3>
            {/* Regular */}
            <FontAwesomeIcon icon={farBell}/>
            <FontAwesomeIcon icon={["far","bell"]}/>

            <h3>3. Brands</h3>
            {/* brands */}
            <FontAwesomeIcon icon={["fab","github"]}/>
            <FontAwesomeIcon icon={ ["fab", "apple"] } />
            <FontAwesomeIcon icon={ ["fab", "google"] } />

            <h3>4. ETC</h3>
            {/* etc */}
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'red'}}/>
            <FontAwesomeIcon icon={faTimesCircle} style={{color: 'blue'}}/>

        </Fragment>
    );
}
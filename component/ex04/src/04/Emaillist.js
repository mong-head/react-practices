import React from 'react';
import Email from './Email';
import PropTypes from 'prop-types'

// Pure Component

export default function Emaillist({ keyword, emails }) {

    console.log('Rendering...Emaillist')

    return (
        <ul className={`Emaillist`}>
            {
                emails
                    .filter( email => 
                        (email.firstName + email.lastName).indexOf(keyword) !== -1 ||
                        email.email.indexOf(keyword) !== -1
                    )
                    .map( email => 
                        <Email key={email.no} firstName={email.firstName} lastName={email.lastName} email={email.email}/>
                    )
            }
        </ul>
	);
}

Emaillist.propTypes = {
    keyword: PropTypes.string.isRequired,
    emails: PropTypes.arrayOf(PropTypes.shape(Email.propTypes))
}
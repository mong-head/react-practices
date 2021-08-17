import React, { Fragment } from 'react';
import SiteLayout from '../layout/SiteLayout';
import Styles from '../assets/scss/component/About.scss';

export default function About(){
    return (
        <SiteLayout>
            <div className={Styles.About}>
                <h2>About</h2>
            </div>
        </SiteLayout>
    )
}
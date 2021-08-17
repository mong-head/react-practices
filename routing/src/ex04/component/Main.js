import React, { Fragment } from 'react';
import SiteLayout from '../layout/SiteLayout';
import Styles from '../assets/scss/component/Main.scss';

export default function Main(){
    return (
        <SiteLayout>
            <div className={Styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
    )
}
import React, { Fragment } from 'react';
import SiteLayout from '../layout/SiteLayout';
import Styles from '../assets/scss/component/Gallery.scss';

export default function Gallery(){
    return (
        <SiteLayout>
            <div className={Styles.Gallery}>
                <h2>Gallery</h2>
            </div>
        </SiteLayout>
    )
}
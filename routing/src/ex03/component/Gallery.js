import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import Styles from '../assets/scss/component/Gallery.scss';

export default function Main(){
    return (
        <Fragment>
            <Header />
            <div className={Styles.Gallery}>
                <h2>Gallery</h2>
            </div>
            <Navigation />
            <Footer />
        </Fragment>
    )
}
import React, { Component } from 'react';

export default function SevenSegmentLED({number, colon}){
    return(
        <div className="SevenSegmentLED">
            <div className="numbers">
                <p>20</p>
                <p className="placeholder"></p>
                <p className="type">second</p>
            </div>
        </div>
    );
}
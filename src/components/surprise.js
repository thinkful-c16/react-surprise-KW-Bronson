import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {view: ['button']}
    }

    render() {
        // Show the button to start with

        return <SurpriseButton />;
    }
}

//needs to know whether to render the button OR image
//this information is stored in the state
//state will be in this component
//updates state to change what's being displayed
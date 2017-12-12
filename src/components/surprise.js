import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image: false};
    }

    switch() {
        this.setState({image: true});
    }

    render() {
        // Show the button to start with
        if (this.state.image === false) {
            return <SurpriseButton onFOOBARClick={(e) => this.switch()} />
        } else if (this.state.image === true)
        return (
            <SurpriseImage />
        )
    }
}

//needs to know whether to render the button OR image
//switch to rendering surprise image when button clicked
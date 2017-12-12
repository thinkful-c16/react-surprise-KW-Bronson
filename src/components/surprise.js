import React from 'react';

// import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image: false};
    }

    render() {
        // Show the button to start with
        if (!this.state.image) {
            return <button className='showButton' onClick={() => this.setState({image: true})}>Surprise!</button>
        } 
        return (
            <SurpriseImage />
        )
    }
}

//needs to know whether to render the button OR image
//switch to rendering surprise image when button clicked
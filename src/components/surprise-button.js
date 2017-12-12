import React from 'react';

export default function SurpriseButton(props) {
    return (
    <button onClick={() => props.onFOOClick()}>Surprise!</button>

);
}

//needs to communication that it has been clicked
//pass it
import React from "react";

export function OldSquare(props) {
    //return (<button className="square" onClick={props.onClick}>{props.value}</button>)

    const imeKlase = `square ${props.daLiJePobednickiKvadrat ? 'osvetli' : ''}`

    return (<button className={imeKlase} onClick={props.onClick}>{props.value}</button>)
}
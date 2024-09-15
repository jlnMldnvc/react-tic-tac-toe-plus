import React from "react";

/* export class OldSquare extends React.Component {
    render() {
        return (
           <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
        )
    }
} */

export function OldSquare(props) {
    return (<>
        <button className="square" onClick={props.onClick}>{props.value}</button>
    </>)
}
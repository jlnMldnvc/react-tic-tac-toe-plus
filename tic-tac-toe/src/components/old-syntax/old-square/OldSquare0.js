import React from "react";

export class OldSquare extends React.Component {
    //
    /* constructor(props) {
        super(props)

        this.state = {
          value: null
        }
      } */
    //
    render() {
        return (
            <>
                {/* <button className="square">{this.props.value}</button> */}
                {/* <button className="square" onClick={function() { console.log('click') }}>{this.props.value}</button> */}
                {/* <button className="square" onClick={() => console.log('click')}>{this.props.value}</button> */}
                {/* <button className="square" onClick={() => this.setState({value:'X'})}>{this.state.value}</button> */}
                <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
            </>
        )
    }
}
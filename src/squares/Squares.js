import React, { Component } from "react";

import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = { selected: 1 };
    }

    render() {
        return (
            <>
                {/*  */}
                <Square 
                    selected={ this.state.selected === 1 } // if state.selected === 1 then selected will be true, if not false
                    handleClick={ () => this.setState({ selected: 1 })} /> 
                {/* function to set state.selected is passed as props to square */}
                <Square 
                    // colour props could be used here but default colour props used instead
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2})} />
            </>
        );
    }
}

export default Squares;
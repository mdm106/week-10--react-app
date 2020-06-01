import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentValue = this.state.count + 1;
        this.setState({ count: currentValue });
        let { handleUpdate } = this.props;
        handleUpdate(currentValue);
    }

    render() {
        let { count } = this.state;

        return (
            <button className="btn btn-primary" onClick={ this.handleClick }>{count}</button>
        )
    }
}

export default Button;
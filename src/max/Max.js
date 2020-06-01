import React, { Component } from "react";

import Counter from "./Counter";

class Max extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: this.props.count };
    }

    handleClickPlus(index) {
        let numbers = this.state.numbers;
        let { max } = this.props;
        let currentNumber = numbers[index];
        numbers[index] = currentNumber < max ? currentNumber + 1 : currentNumber;
        this.setState({ numbers: numbers });
    }

    handleClickMinus(index) {
        let numbers = this.state.numbers;
        let currentNumber = numbers[index];
        numbers[index] = currentNumber > 0 ? currentNumber - 1 : currentNumber;
        this.setState({ numbers: numbers });
    }

    render() {
        let { count } = this.props;

        let { numbers } = this.state;
        let highest = Math.max(...numbers);

        return (
            <> 
            {count.map((number, index) => (
                <Counter key= { index } 
                        counter= { number }
                        handleClickPlus={ () => this.handleClickPlus(index) }
                        handleClickMinus={ () => this.handleClickMinus(index) }
                        highlight={ numbers[index] === highest }     />
            )) }
            
            </>
        );
    }
}

Max.defaultProps = {
    count: [5, 10, 15],
    max: 30,
};



export default Max;
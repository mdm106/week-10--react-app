import React, { Component } from "react";

import Counter from "./Counter";

class Max extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: props.count.map((number) => number) };//use a map as just using this.props.count means the count gets updated
    }

    handleChange(index, step) {
        let values = this.state.numbers;
        let { max } = this.props;
        let currentNumber = values[index];
        let newNumber = currentNumber + step;
        values[index] = newNumber <= max && newNumber >= 0 ? newNumber : currentNumber; //to prevent exceeding max or going below 0
        this.setState({ numbers: values });
    }
    
    render() {
        let { count } = this.props;

        let { numbers } = this.state;
        let highest = Math.max(...numbers); // to return the highest value of numbers

        return (
            <> 
            {count.map((number, index) => (
                <Counter key= { index } 
                        counter= { numbers[index] }
                        handleClickPlus={ () => this.handleChange(index, 1) }
                        handleClickMinus={ () => this.handleChange(index, -1) }
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
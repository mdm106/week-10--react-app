import React, { Component } from "react";

import Password from "./Password";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "",
                    confirm: "" };
    }

    render() {
        let { minimumLength } = this.props;

        let { input, confirm } = this.state;

        let passed = input === confirm && input.length > minimumLength;

        return (
            <>  
            <form class="form-group">
                <Password 
                    label="Password"
                    value={ input }
                    passed={ passed }
                    handleChange={ (e) => this.setState({ input: e.currentTarget.value })} /> 
                <Password
                    label="Confirm Password"
                    value={ confirm }
                    passed={ passed }
                    handleChange={ (e) => this.setState({ confirm: e.currentTarget.value })} />
            </form>
            </>
        );
    }
}

SignUp.defaultProps = {
    minimumLength: 12,
};

export default SignUp;
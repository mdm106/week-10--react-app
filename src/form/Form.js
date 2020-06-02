import React, { Component } from "react";

import Label from './Label';
import Input from './Input';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { handleSubmit } = this.props;
        handleSubmit({...this.state});
        this.setState({ name: "", email: ""});
    }

    render() {
        let { name, email } = this.state;

        return (
            <form>
                <div className="form-group">
                    <Label label="name" />
                    <Input field="name"
                           type="text"
                           input={ name }
                           handleChange={(e) => this.handleName(e)} />
                    <Label label="email" />
                    <Input field="email"
                           type="email"
                           input={ email }
                           handleChange={(e) => this.handleEmail(e)} />
                </div>
                <Button handleSubmit={(e) => this.handleSubmit(e)}>Submit</Button>
            </form>
        )
    }
}

export default Form;
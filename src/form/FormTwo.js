import React, { Component } from "react";

import Label from './Label';
import Input from './Input';
import Button from './Button';

class FormTwo extends Component {
    constructor(props) {
        super(props);

        this.state =  { inputs: props.fields.map(() => "") };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, index) {
        let inputs = this.state.inputs.slice(); /// as slice has no arguments it creates new array in memory, and allows to add to a specific index
        inputs[index] = e.currentTarget.value; /// so the input with index 0 is given the value from the 0 index of the fields.map below etc
        this.setState({ inputs });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { handleSubmit } = this.props;
        handleSubmit({...this.state});
        this.setState({ inputs: this.props.fields.map(() => "")});
    }

    render() {
        let { inputs } = this.state;

        let { fields } = this.props

        return (
            <form>
               {fields.map((field, index) => (
                <div className="form-group" key={ index }>
                <Label label={field.label} />
                <Input field={field.label}
                           type={field.type}
                           input={ inputs[index] }
                           handleChange={(e) => this.handleChange(e, index)} />
                </div>
            )) }
                <Button handleSubmit={(e) => this.handleSubmit(e)}>Submit</Button>
            </form>
        )
    }
}

FormTwo.defaultProps = {
    fields: [
        { label: "Name", name: "name", type: "text" },
        { label: "E-mail", name: "email", type: "email" },
        { label: "Telephone Number", name: "telephone", type: "tel" },
        { label: "Date of Birth", name: "dob", type: "date" },
    ],
};

export default FormTwo;
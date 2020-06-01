import React, { Component } from "react";

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
                    <label htmlFor="name">Name</label>
                    <input className="form-control"
                           id="name"
                           name="name"
                           type="text"
                           value={ name }
                           onChange={(e) => this.handleName(e)} />
                    <label htmlFor="email">Email</label>
                    <input className="form-control"
                           id="email"
                           name="email"
                           type="text"
                           value={ email }
                           onChange={(e) => this.handleEmail(e)} />
                </div>
                <button className="btn btn-primary" type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </form>
        )
    }
}

export default Form;
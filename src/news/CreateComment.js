import React, { Component } from "react";
import axios from '../axios/axios';

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, field) {
        let stateObject = {};
        stateObject[field] = e.currentTarget.value;
        this.setState(stateObject);
    }

    handleSubmit(e) {
        // get the values of some controlled components
        let { email, comment } = this.state;

        let { articleID } = this.props;

        axios.post(`/articles/${articleID}/comments`, { 
            email: email,
            comment: comment,
        }).then(() => {
            // once the server responds successfully, clear the inputs
            this.setState({ email: "", comment: "", }); 
        });

    }

    render() {
        let { email, comment } = this.state;
        return (
            <>
                <div className="container">
                    <form className="mt-4" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control"
                            id="email"
                            name="email"
                            type="text"
                            value={ email }
                            onChange={ e => this.handleChange(e, "email") }
                        />
                        <label htmlFor="comment">Comment</label>
                        <input className="form-control"
                            id="comment"
                            name="comment"
                            type="text"
                            value={ comment }
                            onChange={ e => this.handleChange(e, "comment") }
                        />
                        </div>
                        <button className="btn btn-primary"type="submit">Add Comment</button>
                    </form>
                </div>
            </>
        )
    }
}

export default CreateComment;
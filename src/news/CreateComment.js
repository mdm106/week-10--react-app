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
        this.handleEmail= this.handleEmail.bind(this);
        this.handleComment= this.handleComment.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.currentTarget.value
        })
    }

    handleComment(e) {
        this.setState({
            comment: e.currentTarget.value
        })
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
                            onChange={ this.handleEmail }
                        />
                        <label htmlFor="comment">Comment</label>
                        <input className="form-control"
                            id="comment"
                            name="comment"
                            type="text"
                            value={ comment }
                            onChange={ this.handleComment }
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
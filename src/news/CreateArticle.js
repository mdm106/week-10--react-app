import React, { Component } from "react";
import axios from '../axios/axios';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            article: "",
            tags: "",
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
        e.preventDefault();
        // get the values of some controlled components
        let { title, article, tags } = this.state;

        let formattedTags = tags.trim().split(", ");

        axios.post("/articles", { 
            title: title,
            content: article,
            tags: formattedTags
        }).then(() => {
            // once the server responds successfully, clear the inputs
            this.setState({ title: "", article: "", tags: "" }); 
        });
    }

    render() {
        let { title, article, tags } = this.state;
        return (
            <>
                <div className="container">
                    <h1 className="display-3">Great Blog</h1>
                </div>
                <div className="container">
                    <form className="mt-4" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control"
                            id="title"
                            name="title"
                            type="text"
                            value={ title }
                            onChange={ e => this.handleChange(e, "title") }
                        />
                        <label htmlFor="title">Article</label>
                        <input className="form-control"
                            id="article"
                            name="article"
                            type="text"
                            value={ article }
                            onChange={ e => this.handleChange(e, "article") }
                        />
                        <label htmlFor="title">Tags</label>
                        <input className="form-control"
                            id="tags"
                            name="tags"
                            type="text"
                            value={ tags }
                            onChange={ e => this.handleChange(e, "tags") }
                        />
                        </div>
                        <button className="btn btn-primary"type="submit">Create</button>
                    </form>
                </div>
            </>
        )
    }
}

export default CreateArticle;
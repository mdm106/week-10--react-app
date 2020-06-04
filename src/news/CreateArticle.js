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
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTitle(e) {
        this.setState({
            title: e.currentTarget.value
        })
    }

    handleArticle(e) {
        this.setState({
            article: e.currentTarget.value
        })
    }

    handleTags(e) {
        this.setState({
            tags: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault(); //keeps page from refreshing when it is submitted
        let { title, article, tags } = this.state;
        //RegEx to split words with any comma and space
        let formattedTags = tags.split(/\s*,\s*/);
        console.log(formattedTags);
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
                            onChange={ this.handleTitle } //slight performance issues with anonymous function inline, potentially better to split out // when the annoymous function is called
                        />
                        <label htmlFor="title">Article</label>
                        <input className="form-control"
                            id="article"
                            name="article"
                            type="text"
                            value={ article }
                            onChange={ this.handleArticle }
                        />
                        <label htmlFor="title">Tags</label>
                        <input className="form-control"
                            id="tags"
                            name="tags"
                            type="text"
                            value={ tags }
                            onChange={ this.handleTags }
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
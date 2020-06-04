import React, { Component } from "react";
import axios from '../axios/axios';

import Comments from './Comments';
import CreateComment from './CreateComment';

class Article extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loaded: false,
        article: {}, //empty object because article is an object
      };
    }
  
    // runs when the component first renders
    componentDidMount() {
      // make the GET request
      let id = this.props.articleID;
      axios.get(`/articles/${id}`).then(({ data }) => {
        this.setState({
          loaded: true,
          article: data.data,
        });
      });
    }
  
    render() {
      let { article, loaded } = this.state;
  
      return !loaded ? <p>Loading...</p> : (
        <>
        <div className="container">
          <h1 className="display-3">Great Blog</h1>
          <h3>{ article.title }</h3>
          <p>{article.content}</p>
            {article.tags.map((tag, index) => (
                <span className="float-right badge badge-primary badge-pill" key={index}>
                    {tag}
                </span>
            ))}
        </div>
        <Comments articleID={article.id} />
        <CreateComment articleID={article.id} /> 
        </>
      );
    }
  }
  
  export default Article;
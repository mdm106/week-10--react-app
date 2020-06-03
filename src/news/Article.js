import React, { Component } from "react";
import axios from '../axios/axios';

class Article extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loaded: false,
        article: [],
      };
    }
  
    // runs when the component first renders
    componentDidMount() {
      // make the GET request
      let id = this.props.match.params.id;
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
        <div class="container">
          <h1 className="display-3">Great Blog</h1>
          <ul className="list-group">
              <li key={ article.id } className="list-group-item">
                  { article.title }
                    {article.tags.map(tag => (
                        <span className="float-right badge badge-primary badge-pill" key={tag.id}>
                            {tag}
                        </span>
                    ))}
              </li>
          </ul>
        </div>
      );
    }
  }
  
  export default Article;
import React, { Component } from "react";
import axios from '../axios/axios';

class Comments extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loaded: false,
        comments: [],
      };
    }
  
    // runs when the component first renders
    componentDidMount() {
      let { articleID } = this.props;
      axios.get(`/articles/${articleID}/comments`).then(({ data }) => {
        this.setState({
          loaded: true,
          comments: data.data,
        });
      });
    }
  
    render() {
      let { comments, loaded } = this.state;
  
      return !loaded ? <p>Loading...</p> : (
        <div className="container">
          <h4 className="display-4">Comments</h4>
          <ul className="list-group">
          { comments.map(comment => (
              <li key={ comment.id } className="list-group-item">
                  <p><strong>{ comment.email }</strong></p>
                  <p>{ comment.comment }</p>
              </li>
          ))}
          </ul>
        </div>
      );
    }
  }

  
  
  export default Comments;
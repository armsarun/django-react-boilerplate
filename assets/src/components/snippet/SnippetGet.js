/**
 * Created by arun on 7/14/17.
 */
import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
class Snippet extends Component{
    constructor(){
        super();
        this.state = {
            snippets:[],
        }
    }

    //  after render method executed did mount called dom operations and
    // data fetch are done here
  componentDidMount() {
    axios.get("http://localhost:8000/snippets.json")
      .then(res => {
          this.setState({snippets: res.data});
      });
  }

  render() {
    let items = this.state.snippets.map((snippet, index) => {
        return (
            <li key={index} className="center-block">{snippet.code}</li>
        )
    });
    return (
      <div>
        <ul>
            {items}
            <Link to="/react/users" className="btn btn-primary btn-lg">Users</Link>
        </ul>
      </div>
    );
  }


}
export default Snippet;
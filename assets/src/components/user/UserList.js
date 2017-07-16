/**
 * Created by arun on 7/14/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    };

    componentDidMount() {
        axios.get("http://localhost:8000/users.json")
            .then(res => {

                this.setState({users: res.data});
            });
    }

    render() {
        let items = this.state.users.map((user, index) => {
            return (
                <li key={index} className="center-block">{user.username}</li>
            )
        });
        return (
            <div>
                <h2>Userlist page</h2>
                {items}
                <Link to="/react" className="btn btn-primary btn-lg">Home</Link>

            </div>
        );
    }

}
export default Users;

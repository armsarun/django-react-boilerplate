/**
 * Created by arun on 7/14/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Users extends Component {

    render() {
        return (
            <div>
                <h2>Userlist page</h2>

                <Link to="/react" className="btn btn-primary btn-lg">Home</Link>

            </div>
        );
    }

}
export default Users;

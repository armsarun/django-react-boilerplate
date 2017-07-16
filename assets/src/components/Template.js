/**
 * Created by arun on 7/15/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Template extends Component {
    render() {
        return (
            // main page for the app not reload everytime
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/react">React</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/react">Home</a></li>
                            <li><a href="/react/users">User</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Template.propTypes = {
    children: PropTypes.object
};

export default Template;
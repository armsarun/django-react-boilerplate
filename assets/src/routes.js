/**
 * Created by arun on 7/15/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from './components/Template'
import Snippet from './components/snippet/SnippetGet'
import Users from './components/user/UserList'
import PropTypes from 'prop-types';

export default (
    //template page is like header and remaining load as children
    <Route path="/react" component={Template}>
        <IndexRoute component={Snippet}/>
        <Route path="/react/users" component={Users}/>
    </Route>

);

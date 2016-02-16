import React, { PropTypes } from 'react';
import { Router, Route, 
         Link, IndexLink }  from 'react-router';
import classNames           from 'classnames';

export default class MainView extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div id='main-view'>
                {this.props.children}
            </div>
        );
    }
}
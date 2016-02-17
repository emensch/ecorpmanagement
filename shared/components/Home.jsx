import React        from 'react';
import classNames   from 'classnames';

import Nav          from './Nav'

export default class Home extends React.Component {

    render() {
        let classes = classNames('home');
        let containerClasses = classNames('logo-container');

        return (
            <div className={classes}>
                <div className={containerClasses}>
                    <img src='' />
                </div>
                <Nav />
            </div>
        );
    }
}
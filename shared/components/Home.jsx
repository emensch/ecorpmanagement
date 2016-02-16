import React        from 'react';
import classNames   from 'classnames';

import Nav          from './Nav'

export default class Home extends React.Component {

    render() {
        let classes = classNames('home');

        return (
            <div className={classes}>
                ECORP
                <Nav />
            </div>
        );
    }
}
import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

export default class Contact extends React.Component {

    render() {
        let classes = classNames('contact');

        return (
            <div className={classes}>
                Contact
            </div>
        );
    }
}
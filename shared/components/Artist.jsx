import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

export default class Artist extends React.Component {

    render() {
        let classes = classNames('artist');

        return (
            <div className={classes} id='artist'>
                Artist {this.props.params.slug}
            </div>
        );
    }
}
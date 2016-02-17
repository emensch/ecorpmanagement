import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

export default class ArtistBio extends React.Component {

    render() {
        let classes = classNames('artist-bio');

        return (
            <div className={classes}>
                { this.props.content }
            </div>
        );
    }
}
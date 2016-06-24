import React, { PropTypes } from 'react';
import classNames           from 'classnames';

export default class LoadableContent extends React.Component {

    render() {
        if(this.props.loaded == true) {
            return this.props.children;
        } else {
            return this.renderLoader();
        }
    }

    renderLoader() {
        let classes = classNames('loading');
        let loaderClasses = classNames('loader')

        return (
            <div className={classes}>
                <div className={loaderClasses}> </div>
            </div>
        )
    }
}
import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

import Footer                   from './Footer'

export default class Wrapper extends React.Component {

    render() {
        let classes = classNames('wrapper');

        return (
            <div {...this.props}>
                <div className={classes}>
                    { this.props.children }
                </div>
                <Footer date={new Date()} />
            </div>
        );
    }
}
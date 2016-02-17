import React, { PropTypes } from 'react';
import classNames           from 'classnames';

import Footer               from './Footer'

export default class MainView extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        let classes = classNames('main');

        return (
            <div className={classes} id='main-view'>
                {this.props.children}
                <Footer date={new Date()} />
            </div>
        );
    }
}
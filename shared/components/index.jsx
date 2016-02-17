import React, { PropTypes } from 'react';
import classNames           from 'classnames';

import Footer               from './Footer'

export default class MainView extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        let classes = classNames('main');
        let contentClasses = classNames('content');

        return (
            <div className={classes} id='main-view'>
                <div className={contentClasses}>
                    {this.props.children}
                </div>
                <Footer date={new Date()} />
            </div>
        );
    }
}
import React, { PropTypes }     from 'react';
import classNames               from 'classnames';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

import Footer               from './Footer'

export default class MainView extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        let classes = classNames('main');

        let transitionProps = {
            component: 'div',
            className: classNames('content'),
            transitionName: 'fade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 250
        }

        return (
            <div className={classes} id='main-view'>                 
                <ReactCSSTransitionGroup {...transitionProps}>
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
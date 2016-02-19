import React        from 'react';
import classNames   from 'classnames';

import Wrapper      from './Wrapper';
import Nav          from './Nav';

export default class Home extends React.Component {

    render() {
        let classes = classNames('home');
        let containerClasses = classNames('logo-container');

        return (
            <Wrapper>
                <div className={classes}>
                    <div className={containerClasses}>
                        <img src='/images/logo.png' />
                    </div>
                    <Nav />
                </div>
            </Wrapper>
        );
    }
}
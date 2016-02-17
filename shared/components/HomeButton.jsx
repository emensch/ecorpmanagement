import React            from 'react';
import { IndexLink }    from 'react-router';
import classNames       from 'classnames';

export default class Home extends React.Component {

    render() {
        let classes = classNames('home-button');

        return (
            <div className={classes}>
                <IndexLink to='/'> 
                    <img src='/images/logo_small.png' />
                </IndexLink>
            </div>
        );
    }
}
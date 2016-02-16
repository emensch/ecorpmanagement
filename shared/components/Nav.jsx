import React                from 'react';
import { Link, IndexLink }  from 'react-router';
import classNames           from 'classnames';

export default class Nav extends React.Component {

    render() {
        let classes = classNames('nav');

        return (
            <div className={classes}>
                <ul>
                    <li><IndexLink to='/'> Home </IndexLink></li>
                    <li><Link to='/artist/argenil'> Argenil </Link></li>
                    <li><Link to='/artist/michaelblume'> Michael Blume </Link></li>
                    <li><Link to='/contact'> Contact </Link></li>
                </ul>
            </div>
        );
    }
}
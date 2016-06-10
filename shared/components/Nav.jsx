import React                from 'react';
import { Link }             from 'react-router';
import classNames           from 'classnames';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = classNames('nav');

        return (
            <div className={classes}>
                <ul>
                    {this.props.artists.map( (artist, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/artist/' + artist.slug}> {artist.name} </Link>
                            </li>
                        )
                    })}
                    <li className='separator'> | </li>
                    <li><Link to='/contact'> Contact </Link></li>
                </ul>
            </div>
        );
    }
}
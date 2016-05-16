import React                from 'react';
import { Link }             from 'react-router';
import classNames           from 'classnames';
import { connect }          from 'react-redux';
import { loadArtistNames }  from '../actions/artists';

class Nav extends React.Component {
    componentWillMount() {
        this.props.getArtists();
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

function mapStateToProps(state) {
    let artists = [];
    Object.keys(state.artists).forEach( key => {
        artists.push({slug: key, name: state.artists[key].name})
    });
    return {
        artists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArtists: () => {
            dispatch(loadArtistNames())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
import React                from 'react';
import classNames           from 'classnames';
import { connect }          from 'react-redux';
import { loadArtistNames }  from '../actions/artists';

import Wrapper              from './Wrapper';
import Nav                  from './Nav';
import LoadableContent      from './LoadableContent';

class Home extends React.Component {
    static needs = [
        loadArtistNames
    ];

    componentDidMount() {
        this.props.getArtists();
    }

    render() {
        let classes = classNames('home');
        let containerClasses = classNames('logo-container');
        return (
            <Wrapper>
                <div className={classes}>
                    <div className={containerClasses}>
                        <img src='/images/logo.png' />
                        <LoadableContent loaded={this.props.navLoaded}>
                            <Nav artists={this.props.artists}/>
                        </LoadableContent>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    let artists = [];
    Object.keys(state.artists.items).forEach( key => {
        artists.push({slug: key, name: state.artists.items[key].name})
    });
    return {
        navLoaded: state.artists.gotAllNames,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
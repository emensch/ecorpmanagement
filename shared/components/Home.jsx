import React                from 'react';
import classNames           from 'classnames';
import { connect }          from 'react-redux';
import { loadArtistNames }  from '../actions/artists';

import Wrapper              from './Wrapper';
import Nav                  from './Nav';

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
                        <Nav artists={this.props.artists}/>
                    </div>
                </div>
            </Wrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
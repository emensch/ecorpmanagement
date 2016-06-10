import React, { PropTypes } from 'react';
import classNames           from 'classnames';
import { connect }          from 'react-redux';
import { loadArtist }       from '../actions/artists';

import Wrapper              from './Wrapper';
import HomeButton           from './HomeButton';
import SocialLinks          from './SocialLinks';
import ArtistBio            from './ArtistBio';

class Artist extends React.Component {
    static needs = [
        loadArtist
    ];

    componentDidMount() {
        this.props.getArtist({slug: this.props.params.slug});
    }

    render() {
        let classes = classNames('artist');
        let headerClasses = classNames('artist-header');
        let titleContainerClasses = classNames('artist-title-container');
        let titleClasses = classNames('artist-title');
        let contentClasses = classNames('artist-content');

        let bgStyle = {
            backgroundImage: `url(${this.props.artist.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };

        return (
            <Wrapper>
                <div className={classes} id='artist'>
                    <HomeButton />
                    <div className={headerClasses} style={bgStyle}>
                        <div className={titleContainerClasses}>
                            <div className={titleClasses}> {this.props.artist.name} </div>
                        </div>
                    </div>
                    <div className={contentClasses}>
                        <SocialLinks socials={this.props.artist.socials} />
                        <ArtistBio content={this.props.artist.bio} />
                    </div>
                </div>
            </Wrapper>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let artist = state.artists[ownProps.params.slug];
    return {
        artist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArtist: slug => {
            dispatch(loadArtist(slug))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
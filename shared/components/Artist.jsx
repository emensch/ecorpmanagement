import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

import Wrapper                  from './Wrapper';
import HomeButton               from './HomeButton';
import SocialLinks              from './SocialLinks';
import ArtistBio                from './ArtistBio';

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            michaelblume: {
                name: 'Michael Blume',
                bio: 'Michael Blume has quickly established himself as a powerful new voice of progressive R&B in New York City. Blume’s music centers on themes of the relationship with the self, critique of money-obsession, and shifting youth identity. His debut single "Manufactured Love" repeatedly hit Spotify\'s Viral Charts and earned him a New Artist feature on iTunes as well as high praise from prominent music blogs. Blume’s brand of conscious songwriting, soulful vocals, and charismatic performances has lead to sold out shows at many of NYC’s top venues. He is currently writing and recording his first full-length offering.',
                image: 'http://i.imgur.com/AsWWtkI.jpg',
                socials: [
                    {
                        type: 'soundcloud',
                        link: 'https://soundcloud.com/michaelblume/'
                    },
                    {
                        type: 'twitter',
                        link: 'https://twitter.com/mblumemusic'
                    },
                    {
                        type: 'instagram',
                        link: 'https://www.instagram.com/mblumemusic/'
                    },
                    {
                        type: 'facebook',
                        link: 'https://www.facebook.com/MichaelBlumeMusic'
                    }
                ]
            }, 
            argenil: {
                name: 'Argenil',
                bio: 'Argenil is an EDM duo based out of Bangalore, India, consisting of producer and percussionist Rohit Gandhi and Guitarist and DJ Anil Prasad. Friends since grade school, these two first went into business together by founding 2Pawn Productions, a high-quality video and audio production company that has produced content for the biggest performers in Bangalore. Using this experience Rohit and Anil began to produce and perform their own music under the name Argenil. In a few short months, they have put on dozens of performances in and around their hometown, secured a spot on the main stage of Bangalore\'s first music festival, and even had their music played on American radio. Their first single, “Tha-di-ki-na thom”, is a unique combination of Indian classical music and traditional EDM unlike anything currently on the market. With an exciting, original sound and a killer live show that incorporates many live instruments, Argenil has a big and busy year ahead of them.',
                image: 'http://i.imgur.com/MJjXL4P.jpg',
                socials: [
                    {
                        type: 'soundcloud',
                        link: 'https://soundcloud.com/argenil'
                    },
                    {
                        type: 'instagram',
                        link: 'https://www.instagram.com/argenil_music/'
                    },
                    {
                        type: 'facebook',
                        link: 'https://www.facebook.com/argenilmusic/'
                    }
                ]
            }
        }
    }

    render() {
        let classes = classNames('artist');
        let headerClasses = classNames('artist-header');
        let titleContainerClasses = classNames('artist-title-container');
        let titleClasses = classNames('artist-title');
        let contentClasses = classNames('artist-content');

        let bgStyle = {
            backgroundImage: 'url(' + this.state[this.props.params.slug].image + ')',
            backgroundSize: 'cover',
            backgroundPosition: ([this.props.params.slug] == 'argenil') ? 'center' : 'bottom',
            backgroundRepeat: 'no-repeat'
        }

        return (
            <Wrapper>
                <div className={classes} id='artist'>
                    <HomeButton />
                    <div className={headerClasses} style={bgStyle}>
                        <div className={titleContainerClasses}>
                            <div className={titleClasses}> {this.state[this.props.params.slug].name} </div>
                        </div>
                    </div>
                    <div className={contentClasses}>
                        <SocialLinks socials={this.state[this.props.params.slug].socials} />
                        <ArtistBio content={this.state[this.props.params.slug].bio} />
                    </div>
                </div>
            </Wrapper>
        );
    }
}
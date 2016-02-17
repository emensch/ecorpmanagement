import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

import HomeButton               from './HomeButton';
import SocialLinks              from './SocialLinks';
import ArtistBio                from './ArtistBio';

export default class Artist extends React.Component {

    render() {
        let data = {
            bio: 'Michael Blume has quickly established himself as a powerful new voice of progressive R&B in New York City. Blume’s music centers on themes of the relationship with the self, critique of money-obsession, and shifting youth identity. His debut single "Manufactured Love" repeatedly hit Spotify\'s Viral Charts and earned him a New Artist feature on iTunes as well as high praise from prominent music blogs. Blume’s brand of conscious songwriting, soulful vocals, and charismatic performances has lead to sold out shows at many of NYC’s top venues. He is currently writing and recording his first full-length offering.',
            socials: [
                {
                    type: 'soundcloud',
                    link: '/a'
                },
                {
                    type: 'twitter',
                    link: '/as'
                },
                {
                    type: 'instagram',
                    link: '/asd'
                },
                {
                    type: 'facebook',
                    link: '/asdf'
                }
            ]
        };

        let classes = classNames('artist');
        let headerClasses = classNames('artist-header');
        let titleContainerClasses = classNames('artist-title-container');
        let titleClasses = classNames('artist-title');
        let contentClasses = classNames('artist-content');

        return (
            <div className={classes} id='artist'>
                <HomeButton />
                <div className={headerClasses}>
                    <div className={titleContainerClasses}>
                        <div className={titleClasses}> ARGENIL </div>
                    </div>
                </div>
                <div className={contentClasses}>
                    <SocialLinks socials={data.socials} />
                    <ArtistBio content={data.bio} />
                </div>
            </div>
        );
    }
}
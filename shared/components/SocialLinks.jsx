import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

export default class SocialLinks extends React.Component {

    render() {
        let classes = classNames('social-links');

        return (
            <div className={classes}>
                <ul>
                    {this.props.socials.map( (links, index) => {
                        let iconClasses = classNames('icon', links.type);
                        return (
                            <li key={index}> 
                                <a className={iconClasses} href={links.link} /> 
                            </li> 
                        );
                    })}
                </ul>
            </div>
        );
    }
}
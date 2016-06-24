import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

import Wrapper                  from './FooterWrapper';
import ContactForm              from './ContactForm';
import HomeButton               from './HomeButton';

export default class Contact extends React.Component {

    render() {
        let classes = classNames('contact');
        let containerClasses = classNames('contact-container');
        let headerClasses = classNames('contact-header');

        return (
            <Wrapper>
                <div className={classes}>
                    <HomeButton />
                    <div className={containerClasses}>
                        <div className={headerClasses}> CONTACT </div>
                        <ContactForm />
                    </div>
                </div>
            </Wrapper>
        );
    }
}
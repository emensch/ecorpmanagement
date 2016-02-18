import React, { PropTypes }     from 'react';
import classNames               from 'classnames';

export default class ContactForm extends React.Component {

    render() {
        let classes = classNames('contact-form');
        let groupClasses = classNames('contact-group');

        return (
            <form className={classes}>
                <div className={groupClasses}>
                    <label> Email </label>
                    <input type='email' name='email' />
                </div>
                <div className={groupClasses}>
                    <label> Subject </label>
                    <input type='text' name='subject' />
                </div>
                <div className={groupClasses}>
                    <label> Message </label>
                    <textarea name='message' />
                </div>
                <button type='button'> Send </button>
            </form>
        );
    }
}
import React, { PropTypes } from 'react';
import classNames           from 'classnames';

export default class Footer extends React.Component {
    static propTypes = {
        date: PropTypes.instanceOf(Date).isRequired 
    };

    render() {
        let classes = classNames('footer');

        return (
            <div className={classes}>
                © { this.props.date.getFullYear() } ECorp Management 
            </div>
        );
    }
}
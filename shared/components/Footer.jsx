import React        from 'react';
import classNames   from 'classnames';

export default class Footer extends React.Component {

    render() {
        let classes = classNames('footer');

        return (
            <div className={classes}>
                Footer 
            </div>
        );
    }
}
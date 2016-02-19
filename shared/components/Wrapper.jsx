import React, { PropTypes }     from 'react';

import Footer                   from './Footer'

export default class Wrapper extends React.Component {

    render() {
        return (
            <div>
                { this.props.children }
                <Footer date={new Date()} />
            </div>
        );
    }
}
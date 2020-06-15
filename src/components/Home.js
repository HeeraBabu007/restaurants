import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;

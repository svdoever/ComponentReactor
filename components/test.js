import React from 'react';

class TestComponent extends React.Component {  
    render () {
        return <h1>Dear {this.props.name}. I'm the Test Component!</h1>;
    }
}

TestComponent.defaultProps = { name: 'Santaclaus' };

export default TestComponent;  
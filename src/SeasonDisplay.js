import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMsg: 'unknown error'
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMsg: err.message})
        );
    }

    render() {
        return this.state.lat ?
            <div>lat: {this.state.lat}</div> :
            <div>error: {this.state.errorMsg}</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


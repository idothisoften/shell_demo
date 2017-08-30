import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

class Component extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            view: 'srp'
        };
    }

    goToBCP = () => {
        this.setState(
            () => ({view: 'bcp'})
        );
        this.props.host.load('booking');
    }

    goToBooking = () => {
        this.props.host.navigate('/booking/');
    }

    renderSRP() {
        return (
            <div key="srp">
                <button onClick={this.goToBCP}>
                    Click on result and go to BCP
                </button>
            </div>
        );
    }

    renderBCP() {
        return (
            <div key="bcp">
                <button onClick={this.goToBooking}>
                    Go to Booking
                </button>
            </div>
        );
    }

    renderContent(view) {
        switch (this.state.view) {
            case 'srp':
                return this.renderSRP();
            case 'bcp':
                return this.renderBCP();
        }
    }

    render() {
        return (
            <div>
                <h1>Search App</h1>
                {
                    this.renderContent(this.state.view)
                }
            </div>
        );
    }
};

export const init = (host) => {
    ReactDOM.render(
        <Component host={host} />,
        document.getElementById('container')
    );
    console.log('init search');
};

export const destroy = () => {
    ReactDOM.unmountComponentAtNode(
        document.getElementById('container')
    );
    console.log('destroy search');
};

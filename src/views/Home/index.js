import React, { Component } from 'react';
import './index.scss';
import Catalog from '../../components/Catalog';
import requestHelper from '../../helpers/requestHelper';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiToken: null,
        };

        this.getApiToken = this.getApiToken.bind(this);
    }

    componentDidMount() {
        this.getApiToken();
    }

    getApiToken() {
        let self = this;
        let data = {
            grant_type: process.env.REACT_APP_API_GRANT_TYPE,
            client_id: process.env.REACT_APP_API_CLIENT_ID,
            client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
            scopes: process.env.REACT_APP_API_SCOPES.replace(/ /g, '').split(','),
        }

        requestHelper(
            'post',
            '/token',
            data,
            null,
            function (data) {
                self.setState({
                    apiToken: data.access_token
                });
            }
        );
    }

    render() {
        return (
            <>
                <header>
                    <h1>De Paris à Rennes</h1>
                </header>
                <Catalog apiToken={this.state.apiToken} />
            </>
        );
    }
}

export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import {isNil} from 'lodash';
import Trip from '../Trip';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import requestHelper from '../../helpers/requestHelper';

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            currentPage: 1,
            totalTrips: 0,
            loading: true
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.getTrips = this.getTrips.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.apiToken !== nextProps.apiToken || this.state.trips !== nextState.trips || this.state.currentPage !== nextState.currentPage;
    }

    componentDidUpdate(prevProps) {
        if (this.props.apiToken !== prevProps.apiToken)
            this.getTrips();
    }

    handlePageChange(page) {
        this.setState({
            currentPage: page,
            loading: true
        }, this.getTrips);
    }

    getTrips() {
        if(isNil(this.props.apiToken))
            return;

        let self = this;
        this.setState({
            loading: true
        });

        requestHelper(
            'get',
            '/api/v2/trips',
            {
                _format: 'json',
                page: this.state.currentPage,
                locale: 'fr_FR',
                cur: 'EUR',
                fn: 'Paris',
                tn: 'Rennes'
            },
            {
                Authorization: 'Bearer ' + this.props.apiToken
            },
            function (data) {
                self.setState({
                    trips: data.trips,
                    totalTrips: data.total_trip_count_to_display,
                    loading: false,
                });
            }
        );
    }

    render() {
        if(this.state.trips.length === 0)
            return (
                <div className="container catalog">
                    <div className="row empty">
                        <div className="loading"><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" /></div>
                    </div>
                </div>
            );

        return (
            <div className="container catalog">
                <div className="row">
                    {
                        this.state.loading && <div className="loading"><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" /></div>
                    }
                    {
                        this.state.trips.map((trip, index) => {
                            return <Trip key={index} trip={trip} />;
                        })
                    }
                </div>
                <div className="pagination">
                    <Pagination onChange={this.handlePageChange} current={this.state.currentPage} defaultPageSize={10} total={this.state.totalTrips} locale={localeInfo} />
                </div>
            </div>
        );
    }
}

Catalog.propTypes = {
    apiToken: PropTypes.string,
};

export default Catalog;

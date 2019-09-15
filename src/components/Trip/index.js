import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Stars from '../Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCarSide, faCity, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import userFallbackImg from '../../assets/img/user.png';

class Trip extends Component {
    getUserPicture = () => {
        return this.props.trip.user.has_picture ? this.props.trip.user.picture : userFallbackImg;
    }

    render() {
        return (
            <div className="col-12 col-sm-6">
                <article className="trip">
                    <img src={this.getUserPicture()} alt={this.props.trip.user.display_name} /><br />
                    {this.props.trip.user.display_name}<br />
                    <Stars
                        rating={this.props.trip.user.rating}
                        ratingCount={this.props.trip.user.rating_count}
                    /><br />
                    <b>{this.props.trip.price_with_commission.string_value}</b>
                    <div className="path">
                        <span>{this.props.trip.departure_place.city_name}</span>
                        <span>{this.props.trip.arrival_place.city_name}</span>
                        <FontAwesomeIcon icon={faBuilding} />
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                        <FontAwesomeIcon icon={faCarSide} />
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                        <FontAwesomeIcon icon={faCity} />
                    </div>
                </article>
            </div>
        );
    }
}

Trip.propTypes = {
    trip: PropTypes.object.isRequired,
};

export default Trip;

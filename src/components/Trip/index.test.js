import React from 'react';
import { shallow } from 'enzyme'
import Component from './index';
import sampleTrip from '../../utils/sampleTrip';
import userFallbackImg from '../../assets/img/user.png';
import { cloneDeep } from 'lodash';

describe('Trip component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Component trip={sampleTrip} />);
    });

    test('renders', () => {
        expect(component.find('.trip')).toHaveLength(1);
        expect(component.find('img').prop('src')).not.toEqual(userFallbackImg);
    });

    test('renders without user image', () => {
        let trip = cloneDeep(sampleTrip);
        trip.user.has_picture = false;

        component.setProps({trip: trip})

        expect(component.find('.trip')).toHaveLength(1);
        expect(component.find('img').prop('src')).toEqual(userFallbackImg);
    });

    test('preserve UI', () => {
        expect(component).toMatchSnapshot();
    });
});

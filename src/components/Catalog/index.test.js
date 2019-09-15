import React from 'react';
import { shallow } from 'enzyme'
import Component from './index';
import sampleTrip from '../../utils/sampleTrip';

describe('Catalog component', () => {
    let component;
    let trips = Array(12).fill(sampleTrip);

    describe('empty page', () => {
        beforeEach(() => {
            component = shallow(<Component apiToken={null} />);
        });

        test('renders', () => {
            expect(component.state('totalTrips')).toEqual(0);
            expect(component.find('.loading')).toHaveLength(1);
            expect(component.find('Trip')).toHaveLength(0);
        });
    });

    describe('has trips', () => {
        beforeEach(() => {
            component = shallow(<Component apiToken={null} />);
            component.instance().getTrips = jest.fn(() => {
                let start = (component.state('currentPage') - 1) * 10;
                let selectedTrips = trips.slice(start, start + 10);

                component.setState({
                    trips: selectedTrips,
                    totalTrips: trips.length,
                    loading: false,
                });
            });
            component.update();
            component.setProps({apiToken: 'test'})

            expect(component.state('totalTrips')).toEqual(12);
            expect(component.state('loading')).toEqual(false);
        });

        test('renders', () => {
            expect(component.state('trips')).toHaveLength(10);
            expect(component.find('Trip')).toHaveLength(10);
        });

        test('preserve UI', () => {
            expect(component).toMatchSnapshot();
        });

        it('should show page 2', () => {
            component.instance().handlePageChange(2);

            expect(component.state('trips')).toHaveLength(2);
            expect(component.find('Trip')).toHaveLength(2);
            expect(component).toMatchSnapshot();
        });
    });
});

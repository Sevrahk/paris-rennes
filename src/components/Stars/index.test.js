import React from 'react';
import { shallow } from 'enzyme'
import Component from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

describe('Stars component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Component rating={1.5} ratingCount={3} />);
    });

    test('renders', () => {
        expect(component.find(FontAwesomeIcon)).toHaveLength(5);
    });

    test('has 1 star, 1 half star, 3 blank stars', () => {
        expect(component.find(FontAwesomeIcon).filterWhere((item) => {
            return item.prop('icon') === fas.faStar;
        })).toHaveLength(1);

        expect(component.find(FontAwesomeIcon).filterWhere((item) => {
            return item.prop('icon') === fas.faStarHalfAlt;
        })).toHaveLength(1);

        expect(component.find(FontAwesomeIcon).filterWhere((item) => {
            return item.prop('icon') === far.faStar;
        })).toHaveLength(3);
    });

    test('preserve UI', () => {
        expect(component).toMatchSnapshot();
    });
});

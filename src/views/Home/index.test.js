import React from 'react';
import { shallow } from 'enzyme'
import Component from './index';

describe('Stars component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Component />);
    });

    test('renders', () => {
        expect(component.find('Catalog')).toHaveLength(1);
    });

    test('preserve UI', () => {
        expect(component).toMatchSnapshot();
    });
});

// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import Header from './header'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('check for header class', () => {
    const wrapper = shallow(
        <Header />
    )
    expect(wrapper.hasClass('app-header')).toBe(true)
})

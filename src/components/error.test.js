// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import Error from './error'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const tree = renderer
        .create(<Error />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

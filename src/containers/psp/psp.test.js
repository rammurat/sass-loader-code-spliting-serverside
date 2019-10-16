// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import PSP from './psp'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({
        posts: {
            initialConfig: {
                pagination: {
                    perPage: 0
                }
            }
        }
    })
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><PSP /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
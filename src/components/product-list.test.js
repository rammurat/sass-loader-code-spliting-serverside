// @ts-nocheck
import 'jsdom-global/register';
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import List from './product-list'

import Enzyme, { mount } from 'enzyme';
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
                },
                isLoading: false
            }
        }
    })
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><List /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('check for product list container', () => {
    const wrapper = mount(
        <Provider store={store}>
            <List />
        </Provider>
    )
    expect(wrapper.find('.product-list').length).toBe(1)
})
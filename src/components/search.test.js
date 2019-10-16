// @ts-nocheck
import 'jsdom-global/register';
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import Search from './search'

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({})
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><Search /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('check for search form', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Search />
        </Provider>
    )
    expect(wrapper.find('form').length).toBe(1)
})
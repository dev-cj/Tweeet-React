import React from 'react'
import { shallow, mount } from 'enzyme';
import LoginForm from './login'
import "../../setupTest"
import { testStore } from '../../Utils'

const submit = jest.fn();
const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<LoginForm store={store}/>).dive()
    return wrapper;
};

describe('Login Form', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });
    it('check email input', () => {

        wrapper.find('input[type="email"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'inputEmail', value: 'login@form.test' } });
        expect(wrapper.state('inputEmail')).toEqual('login@form.test');
    })
    it('password check', () => {
        //wrapper = shallow(<LoginForm />);
        wrapper.find('input[type="password"]').simulate('change', { preventDefault:jest.fn(), target: { name: 'inputPassword', value: 'password123' } });
        expect(wrapper.state('inputPassword')).toEqual('password123');
    })
    it('login check submit', () => {
        wrapper.find('input[type="email"]').simulate('change', { preventDefault:jest.fn(), target: { name: 'inputEmail', value: 'login@form.test' } });
        wrapper.find('input[type="password"]').simulate('change', { preventDefault:jest.fn(), target: { name: 'inputPassword', value: 'password123' } });
        wrapper.find('form').simulate('submit', {preventDefault:submit});
        expect(submit).toHaveBeenCalledTimes(1);
    })
})


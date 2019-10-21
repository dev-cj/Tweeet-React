import React from 'react'
import { shallow, mount } from 'enzyme';
import RegisterForm from "./register";
import "../../setupTest"

jest.mock("axios");

const submit = jest.fn()
describe('Register form tests', () => {
    const wrapper = shallow(<RegisterForm/>)
    beforeEach(() => {
        
    })
    it('check name input', () => {

        wrapper.find('input[type="text"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'name', value: 'Andrew' } });
        expect(wrapper.state('name')).toEqual('Andrew');
    })
    it('check email input', () => {

        wrapper.find('input[type="email"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'email', value: 'register@form.test' } });
        expect(wrapper.state('email')).toEqual('register@form.test');
    })
    it('password check', () => {
        wrapper.find('input[type="password"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'password', value: 'password123' } });
        expect(wrapper.state('password')).toEqual('password123');
    })
    it('register check submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: submit });
        expect(submit).toHaveBeenCalledTimes(1);
    })
})
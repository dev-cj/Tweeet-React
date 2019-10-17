import React from 'react'
import { shallow } from 'enzyme';
import LoginForm from './login'
import "../../setupTest"

describe('Login Form', () => {
    let wrapper;
    


    it('check email input', () => {
        wrapper = shallow(<LoginForm />)
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'inputEmail', value: 'login@form.test' } });
        expect(wrapper.state('inputEmail')).toEqual('login@form.test');
    })
    it('password check', () => {
        wrapper = shallow(<LoginForm />);
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'inputPassword', value: 'password123' } });
        expect(wrapper.state('inputPassword')).toEqual('password123');
    })
    it('login check submit', () => {
        const submit = () => jest.fn();
        wrapper = shallow(<LoginForm onSubmit={submit}/>);
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'inputEmail', value: 'login@form.test' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'inputPassword', value: 'password123' } });
        wrapper.find('button').simulate('click');
        expect(submit).toHaveBeenCalledTimes(1);
    })
})


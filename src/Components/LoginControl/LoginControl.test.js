import React from 'react';
import LoginForm from '.././login/login';
import RegisterForm from '.././register/register';
import AddPost from '../addPost/addPost';
import { Switch, Route, NavLink } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import createBrowserHistory from '../../history';
import { shallow, mount } from 'enzyme';
import "../../setupTest"
import { testStore } from '../../Utils';
import LoginControl from './LoginControl';


describe('LoginControl', () => {
    it('check AddPost mounts when logged In', () => {
        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = shallow(<LoginControl store={store} />).dive().dive()
            return wrapper;
        };
        let wrapper;
        const initialState = {
            isLoggedIn: true
        }
        wrapper = setUp(initialState);

        //console.log(wrapper.debug())
        //console.log(wrapper.find((AddPost)))
        expect(wrapper.find('Connect(AddPost)')).toHaveLength(1);
    })
    it('check link nav shows when logged Out', () => {
        let wrapper;
        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = shallow(<MemoryRouter><LoginControl store={store} /></MemoryRouter>).dive().dive().dive().dive().dive()
            return wrapper;
        };

        const initialState = {
            isLoggedIn: false
        }
        wrapper = setUp(initialState);

        console.log(wrapper.debug())
        //console.log(wrapper.find((AddPost)))
        expect(wrapper.find('Connect(AddPost)')).toHaveLength(1);
        expect(wrapper.find(NavLink))
    })
})
import React from 'react'
import { shallow } from 'enzyme';
import "../../setupTest"
import { testStore } from '../../Utils';
import AddPost from './addPost';

jest.mock("axios");
const submit = jest.fn();
const dispatch = jest.fn();
const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    store.dispatch = dispatch
    const wrapper = shallow(<AddPost store={store} dispatch={store.dispatch} />).dive()
    return wrapper;
};
describe('AddPost', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });
    it('check title input', () => {
        wrapper.find('input[type="text"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'title', value: 'New Post title' } });
        expect(wrapper.state('title')).toEqual('New Post title');
    })
    it('checks body input', () => {
        wrapper.find('textarea').simulate('change', { preventDefault: jest.fn(), target: { name: 'body', value: 'text body' } });
        expect(wrapper.state('body')).toEqual('text body');
    })
    it('checks submit with title and body', () => {
        wrapper.find('input[type="text"]').simulate('change', { preventDefault: jest.fn(), target: { name: 'title', value: 'New Post title' } });
        wrapper.find('textarea').simulate('change', { preventDefault: jest.fn(), target: { name: 'body', value: 'text body' } });
        wrapper.find('form').simulate('submit', { preventDefault: submit });
        expect(submit).toHaveBeenCalledTimes(1);
    })
    it('check redux dispatch is called', () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
    })
})
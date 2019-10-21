import React, { Component } from 'react';
import Feed from './feed';
import { testStore } from '../../Utils';
import { shallow, mount } from 'enzyme';
import "../../setupTest"
jest.mock("axios");
const setUp = (initialState) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Feed store={store}/>).dive().dive()
    return wrapper;
};

describe('Feed test', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    "title": "DaVinci Code",
                    "body": "Dan Brown",
                    "id": 1
                },
                {
                    "title": "Worth Dying For",
                    "body": "Lee Child",
                    "id": 2
                },
                {
                    "title": "Eleven Minutes",
                    "body": "Paulo Coelho",
                    "id": 3
                }
            ]
        }
        wrapper = setUp(initialState);
    });
    it('checks feed renders 3 posts with P tags', () => {
        //console.log(wrapper.debug())
        expect(wrapper.find('p').at(0).text()).toEqual('Eleven Minutes')
        expect(wrapper.find('p').at(1).text()).toEqual('Paulo Coelho')
        expect(wrapper.find('p').at(2).text()).toEqual('Worth Dying For')
        expect(wrapper.find('p').at(3).text()).toEqual('Lee Child')
        expect(wrapper.find('p').at(4).text()).toEqual('DaVinci Code')
        expect(wrapper.find('p').at(5).text()).toEqual('Dan Brown')
    })
})

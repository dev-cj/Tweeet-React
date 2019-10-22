import reducer from './reducer';

describe('reducer test', () => {
    it('test return the initial state', () => {
        expect(reducer(undefined,{})).toEqual({
            isLoggedIn: false,
            userName: "",
            updateRequired: false,
            posts: []
        })
    })
    it('should return updated state logged In true', () => {
        expect(reducer({
            isLoggedIn: false,
            userName: "",
            updateRequired: false,
            posts: []
        },{type: 'loggedIn',payload: 'yahoo'})).toEqual({
            isLoggedIn: true,
            userName: "yahoo",
            updateRequired: false,
            posts: []
        })
    })
    it('should return updated state logged out false', () => {
        expect(reducer({
            isLoggedIn: false,
            userName: "",
            updateRequired: false,
            posts: []
        },{type: 'loggedOut',payload: 'Guest'})).toEqual({
            isLoggedIn: false,
            userName: "Guest",
            updateRequired: false,
            posts: []
        })
    })
})
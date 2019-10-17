import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store';

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

const mockStore = configureStore([]);

let store = mockStore({
    myState: 'sample text',
});

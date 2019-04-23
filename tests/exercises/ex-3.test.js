import React from 'react';
import ReactDOM from 'react-dom';
import Exercise2 from '../../src/components/Exercise2/Exercise2';
import List from '../../src/components/Exercise2/List'
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("Exercise 3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Exercise2 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('you should map an array of your 3 contacts and pass the array as the prop "contacts" to your List component', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: null}, () => {
            expect(wrapper.find(List).props(), 'you should be passing props to your List component')
                .toBeDefined()
            let contacts = wrapper.find(List).props().contacts
            expect(contacts, 'you should map an array of your 3 contacts as the prop "contacts" to your List component')
                .toHaveLength(3)
        })
    });
})
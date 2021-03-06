import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Heading } from './Heading';

configure({ adapter: new Adapter() });

describe('<Heading>', () => {
  describe('Heading will render', () => {
    it('creates a button component', () => {
      const props = {
        content: 'Heading',
      };
      const tree = shallow(<Heading {...props} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Will take in multiple Props', () => {
    let tree;
    beforeAll(() => {
      const props = {
        color: null,
        size: 'medium',
        content: 'Heading',
      };
      tree = shallow(<Heading {...props} />);
    });

    it('Will have a child text', () => {
      expect(tree.text()).toEqual('Heading');
    });
  });
});

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TextStory } from "../../components/atoms/Text/Text.html";

configure({ adapter: new Adapter() });

describe("Text (HTML component)", () => {
  describe("Text (HTML component) will render", () => {
    it("creates a text component", () => {
      const props = {
        content: "text content",
      };
      const tree = shallow(<TextStory {...props}></TextStory>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Will take in multiple Props", () => {
    let tree;
    beforeAll(() => {
      const props = {
        color: null,
        content: "text content",
      };
      tree = shallow(<TextStory {...props}></TextStory>);
    });

    it("Will have a child text", () => {
      expect(tree.text()).toEqual("<p>text content</p>");
    });
  });
});

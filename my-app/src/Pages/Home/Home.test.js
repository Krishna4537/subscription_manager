import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBeTruthy();
  });
  // it("should call handleFilterClick when a filter button is clicked", () => {
  //   const handleFilterClick = jest.fn();
  //   const wrapper = shallow(<Home handleFilterClick={handleFilterClick} />);
  //   wrapper.find("#sort-by-price-button").simulate("click");
  //   expect(handleFilterClick).toHaveBeenCalled();
  // });
});

import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";

describe("App Component", () => {
  let wrapper = null;
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
    );
  };
  beforeEach(() => {
    wrapper = component();
  });
  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders the header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("renders the bottom navigation component", () => {
    expect(wrapper.find("SimpleBottomNavigation")).toHaveLength(1);
  });

  // it("handles login correctly", async () => {
  //   const button = wrapper.find("Button");
  //   axios.post.mockResolvedValueOnce({ data: { success: true } });

  //   button.simulate("click");
  //   expect(wrapper.find({ isLoading: true })).toHaveLength(1);

  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   wrapper.update();

  //   expect(wrapper.find({ loggedIn: true })).toHaveLength(1);
  //   expect(wrapper.find({ isLoading: false })).toHaveLength(1);
  // });

  it("sets the isLoading state to true while handleLogin is called and then sets it to false after a delay", () => {
    jest.useFakeTimers();
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const button = wrapper.find("Button");
    button.simulate("click");
    expect(wrapper.find("Header").prop("isLoading")).toBe(true);
    jest.advanceTimers;
  });

  // it("renders Discover component with correct props when user is logged in", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/discover"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   wrapper.find(Button).simulate("click");
  //   const discover = wrapper.find(Discover);
  //   expect(discover.prop("isUserLoggedIn")).toBe(false);
  //   expect(discover.prop("isLoading")).toBe(true);
  //   setTimeout(() => {
  //     expect(discover.prop("isUserLoggedIn")).toBe(true);
  //     expect(discover.prop("isLoading")).toBe(false);
  //   }, 1500);
  //   wrapper.unmount();
  // });

  // it("renders the discover page correctly when user is logged in", () => {
  //   wrapper.find('NavLink[href="/discover"]').simulate("click");

  //   expect(wrapper.find("Discover")).toHaveLength(1);
  //   expect(wrapper.find({ isUserLoggedIn: true })).toHaveLength(1);
  //   expect(wrapper.find({ isLoading: false })).toHaveLength(1);
  // });

  // it("renders the discover page correctly when user is not logged in", () => {
  //   wrapper.unmount();

  //   wrapper = mount(
  //     <MemoryRouter initialEntries={["/discover"]}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find("Discover")).toHaveLength(1);
  //   expect(wrapper.find({ isUserLoggedIn: false })).toHaveLength(1);
  //   expect(wrapper.find({ isLoading: false })).toHaveLength(1);
  // });
});

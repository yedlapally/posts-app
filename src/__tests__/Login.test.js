import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginPage } from "../components/login/Login";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("should render LoginPage without throwing an error", () => {

  const loginInfo = { login: "", password: "" };

  const tree = renderer.create(<LoginPage loginInfo={loginInfo} />).toJSON();
  expect(tree).toMatchSnapshot();

  const mockFn = jest.fn();
  const LoginFormMounted = shallow(
    <LoginPage loginInfo={loginInfo} onLogin={mockFn} onUpdateField={mockFn} />
  );

  it("Find the  render of Login form ", () => {
    expect(LoginFormMounted.find(".login-page").exists()).toBe(true)
  });

  it("Find the  render of username test case ", () => {
    expect(LoginFormMounted.find("#username").exists()).toBe(true);

  });

  it("Find the  render of password field ", () => {
    expect(LoginFormMounted.find("#password").exists()).toBe(true);

  });

  it("Find the  render of submit Button ", () => {
    expect(LoginFormMounted.find(".submit_btn").exists()).toBe(true);
  });

});

import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PostPage } from "../components/landingposts/PostPage";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("should render PostTile without throwing an error", () => {

  const tree = renderer.create(<PostPage {...tileInfo} />).toJSON();
  expect(tree).toMatchSnapshot();

  const PostTileMounted = shallow(
    <PostPage {...tileInfo} />
  );

  it("Find the  render of Post tile component ", () => {
    expect(PostTileMounted.find(".post-card").exists()).toBe(true)
  });

});

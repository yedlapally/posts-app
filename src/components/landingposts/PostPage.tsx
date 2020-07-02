import usePosts from "../../hooks/postHook";
import useUserInput from "../../hooks/userInputHook";
import useSearchable from "../../hooks/searchHook";
import "./postpage.scss";
import * as React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import IPost from "../../model/IPost";
interface Props extends RouteComponentProps { }
export const PostPage = (props: Props) => {
  const searchText = useUserInput("");
  const posts = usePosts();
  const searchablePosts = useSearchable(
    posts,
    searchText.value,
    (l) => [l.title, l.body],
  );
  var sortedArray: IPost[] = searchablePosts.sort((obj1, obj2) => {
    if (obj1.id > obj2.id) { return -1; }
    if (obj1.id < obj2.id) { return 1; }
    return 0;
  });
  return (
    <div className="container">
      <div className="row search-post">
        <button className="logout-btn" onClick={() => window.sessionStorage.clear()}>
          <Link to="/">Logout</Link>
        </button>
        <input
          className="post-search"
          {...searchText}
          placeholder="search posts here..."
        />
      </div>
      <div className="post-list-container">
        {sortedArray && sortedArray.length > 0 ? (
          sortedArray.map((post) => (
            <div
              key={post.id}
              onClick={() => props.history.push("/details/" + post.id)}
              className="col-lg-4">
              <div className="post-card">
                <div>
                  <span ><b>User Id: </b></span>
                  <span className="userid-val">{post.userId}</span>
                </div>
                <div>
                  <span><b>Title: </b></span>
                  <span className="title-val">{post.title}</span>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );


};

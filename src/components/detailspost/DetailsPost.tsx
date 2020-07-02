import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import IPost from "../../model/IPost";
import usePostDetails from "../../hooks/detailHook";
import "./detailspost.scss";
interface Props extends RouteComponentProps { }
export const DetailsPost = (props: Props) => {
  let detailsJson = usePostDetails(props);
  if (detailsJson !== undefined && detailsJson !== null) {
    let details = detailsJson as IPost;
    return (
      <div id="details_container" className="container">
        <div>
          <button className="back-btn">
            <Link to="/posts">Go Back</Link>
          </button>
        </div>
        <h2>Details</h2>
        <div>
          <div className="detail-lbls">
            <span className="bold-lbls"> UserId : </span>
            <span>{details.userId}</span>
          </div>
          <div className="detail-lbls">
            <span className="bold-lbls"> Id : </span>
            <span>{details.id}</span>
          </div>
          <div className="detail-lbls">
            <span className="bold-lbls"> Title : </span>
            <span>{details.title}</span>
          </div>
          <div className="detail-lbls">
            <span className="bold-lbls"> Body : </span>
            <span>{details.body}</span>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

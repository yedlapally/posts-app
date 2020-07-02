import IPost from "../model/IPost";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ConfigUrl from "../config/ConfigUrl"
import { toast } from "react-toastify";

interface Props extends RouteComponentProps { }

const usePostDetails = (props: Props) => {
  const [postDetails, setPostDetails] = useState();

  let endpoint = ConfigUrl.POSTS_API_URL + "/" + props.match.params['id'];
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setPostDetails(data))
      .catch(function (error) {
        toast.error(error.message);
      });
  }, []);
  return postDetails;
};
export default usePostDetails; 
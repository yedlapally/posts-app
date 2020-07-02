import IPost from "../model/IPost";
import { useState, useEffect } from "react";
import ConfigUrl from "../config/ConfigUrl"
import { toast } from "react-toastify";

const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const endpoint = ConfigUrl.POSTS_API_URL;
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch(function (error) {
        toast.error(error.message);
      });
  }, []);
  return posts;
};
export default usePosts;
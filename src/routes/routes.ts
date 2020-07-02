import { LoginPage } from "../components/login/Login";
import { PostPage } from "../components/landingposts/PostPage";
import { DetailsPost } from "../components/detailspost/DetailsPost";
import NotFound from "../components/notfound/PageNotFound";
import { IRoute } from "../model/IRoute";

const routes: IRoute[] = [
    {
        path: "/",
        component: LoginPage,
        isPrivateRoute: false,
        exact: true
    },
    {
        path: "/login",
        component: LoginPage,
        isPrivateRoute: false,
        exact: true
    },
    {
        path: "/posts",
        component: PostPage,
        isPrivateRoute: true,
        exact: true
    },
    {
        path: "/details/:id",
        component: DetailsPost,
        isPrivateRoute: true,
        exact: true
    },
    {
        path: "*",
        component: NotFound,
        isPrivateRoute: false,
        exact: false
    }
];

export default routes;

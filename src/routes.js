import PostsIndex from './pages/PostsIndex';
import PostsNew from './pages/PostsNew';
import PostsShow from './pages/PostsShow';
import Login from './pages/Login';
import SignUp from 'pages/SignUp';


const routes = [
  {
    path: "/",
    exact: true,
    component: PostsIndex
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/new",
    component: PostsNew
  },
  {
    path: "/:slug",
    component: PostsShow
  },
  
];

export default routes;
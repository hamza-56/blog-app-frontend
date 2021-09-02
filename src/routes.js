import Index from './pages/Index';
import PostsIndex from './pages/PostsIndex';
import PostsNew from './pages/PostsNew';
import PostsShow from './pages/PostsShow';

const routes = [
  {
    path: "",
    component: Index
  },
  {
    path: "/blogs",
    component: PostsIndex,
    routes: [
      {
        path: "/blogs/create",
        component: PostsNew
      },
      {
        path: "/blogs/:id",
        component: PostsShow
      }
    ]
  }
];

export default routes;
import AdminHome from './components/admin/home/AdminHome.vue';

// category
import CategoryList from './components/admin/category/List.vue';
import CategoryAdd from './components/admin/category/New.vue';
import CategoryEdit from './components/admin/category/Edit.vue';

// post 

import PostList from './components/admin/post/List.vue';
import PostAdd from './components/admin/post/New.vue';
import PostEdit from './components/admin/post/Edit.vue';


export const routes = [
  {
    path: '/home',
    component: AdminHome
  },
  {
    path: '/category-list',
    component: CategoryList
  },
  {
    path: '/category-add',
    component: CategoryAdd
  },
  {
    path: '/category-edit/:categoryid',
    component: CategoryEdit
  },
  {
    path: '/posts-list',
    component: PostList
  },
  {
    path: '/posts-add',
    component: PostAdd
  },
  {
    path: '/posts-edit/:postid',
    component: PostEdit
  }
]
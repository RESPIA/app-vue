import AdminHome from './components/admin/home/AdminHome.vue';

import CategoryList from './components/admin/category/List.vue';
import CategoryAdd from './components/admin/category/New.vue';
import CategoryEdit from './components/admin/category/Edit.vue';


import PostList from './components/admin/post/List.vue';


export const routes = [
   {
     path : '/home',
     component : AdminHome
   },
   {
     path : '/category-list',
     component : CategoryList
   },
   {
    path : '/posts-list',
    component : PostList
   },
   {
     path: '/category-add',
     component : CategoryAdd
   },
   {
    path:'/category-edit/:categoryid',
    component : CategoryEdit
    }
  ]
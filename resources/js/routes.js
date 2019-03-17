import AdminHome from './components/admin/home/AdminHome.vue';

/*BackEnd*/
// category
import CategoryList from './components/admin/category/List.vue';
import CategoryAdd from './components/admin/category/New.vue';
import CategoryEdit from './components/admin/category/Edit.vue';

// post 

import PostList from './components/admin/post/List.vue';
import PostAdd from './components/admin/post/New.vue';
import PostEdit from './components/admin/post/Edit.vue';


/*FrontEnd*/
import PublicHome from './components/public/PublicHome.vue';
import Posts from './components/public/blog/Posts.vue';
import Contact from './components/public/blog/Contact.vue';
import Post from './components/public/blog/Post.vue'

export const routes = [
    // Backend
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
    },
    // Frontend
    {
        path: '/',
        component: PublicHome
    },
    {
        path: '/blogs',
        component: Posts
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/post/:id',
        component: Post
    },
    {
        path: '/categories/:id',
        component: Posts
    }
]
export default {
    state: {
        // backend
        category: [],
        posts: [],
        // frontend
        blogpost: [],
        singlepost: [],
        allcategories: [],
        latestpost: []
    }, // module state is already nested and not affected by namespace option
    getters: {
        // backend
        getCategory(state) {
            return state.category
        }, // -> getters['account/isAdmin']

        getPost(state) {
            return state.posts
        }, // -> getters['account/isAdmin']

        // frontend 
        // get post all and get all post of a category by id
        getBlogPost(state) {
            //console.log(state.blogposts);
            return state.blogpost
        }, // -> getters['account/isAdmin']
        singlepost(state) {
            return state.singlepost
        },
        allcategories(state) {
            return state.allcategories
        },
        latestpost(state) {
            return state.latestpost
        }
    },
    actions: {
        // Backend

        // dispatch action from List Cate
        allCategory(context) {
            axios.get('/category').then((response) => {
                //console.log(response.data.category);

                // node view life circe

                // task 1
                context.commit('category', response.data.category);
            })
        }, // -> dispatch('account/login')

        // dispatch action from List Cate
        allPost(context) {
            axios.get('/posts').then((response) => {
                //console.log(response.data.posts);

                // node view life circe

                // task 2
                context.commit('posts', response.data.posts);
            })
        }, // -> dispatch('account/login')


        // Frontend
        getblogPost(context) {
            axios.get('/blogpost')
                .then((response) => {
                    //console.log(response.data.posts)
                    // task 3
                    context.commit('getblogPosts', response.data.posts)
                })
        },
        // receved id from single post
        getPostById(context, payload) {
            axios.get('/singlepost/' + payload)
                .then((response) => {
                    context.commit('singlepost', response.data.post)
                })
        },

        allcategories(context) {
            axios.get('/categories')
                .then((response) => {

                    context.commit('allcategories', response.data.categories)
                })
        },
        latestPost(context) {
            axios.get('/latestpost')
                .then((response) => {
                    // console.log(response.data)
                    context.commit('latestpost', response.data.posts)
                })
        },
        getPostByCatId(context, payload) {
            axios.get('/categorypost/' + payload)
                .then((response) => {
                    console.log(response.data.posts)
                    context.commit('getPostByCatId', response.data.posts)
                })
        },
        SearchPost(context, payload) {
            axios.get('/search?s=' + payload)
                .then((response) => {
                    context.commit('getSearchPost', response.data.posts)
                })

        }
    },
    mutations: {
        // Backend
        // run task 1
        category(state, data) {
            return state.category = data;
        }, // -> commit('account/login')
        // run task 2
        posts(state, data) {
            return state.posts = data;
        }, // -> commit('account/login')

        // Frontend
        // run task 3
        getblogPosts(state, payload) {
            return state.blogpost = payload;
            //console.log(payload);
        },
        singlepost(state, payload) {
            return state.singlepost = payload
        },
        allcategories(state, payload) {
            return state.allcategories = payload
        },
        latestpost(state, payload) {
            state.latestpost = payload
        },
        // using blogpost common
        getPostByCatId(state, payload) {
            state.blogpost = payload
        },
        getSearchPost(state, payload) {
            state.blogpost = payload
        }
    },
}
export default {
    state: {
        category: [],
        posts: []
    }, // module state is already nested and not affected by namespace option
    getters: {
        getCategory(state) {
            return state.category
        }, // -> getters['account/isAdmin']

        getPost(state) {
            return state.posts
        } // -> getters['account/isAdmin']

    },
    actions: {
        // dispatch action from List Cate
        allCategory(context) {
            axios.get('/category').then((response) => {
                //console.log(response.data.category);

                // node view life circe

                // task 2
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
        } // -> dispatch('account/login')

    },
    mutations: {
        // run task 2
        category(state, data) {
            return state.category = data;
        }, // -> commit('account/login')
        posts(state, data) {
            return state.posts = data;
        } // -> commit('account/login')
    },
}
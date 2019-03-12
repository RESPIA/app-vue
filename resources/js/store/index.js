export default {
    state: {
        category : []
    }, // module state is already nested and not affected by namespace option
    getters: {
        getCategory(state) {
            return state.category
        }, // -> getters['account/isAdmin']
        abc(state){
            
        }
    },
    actions: {
        // dispatch action from List Cate
        allCategory(context) {
            axios.get('/category').then((response) => {
                //console.log(response.data.category);

                // node view life circe
                
                // task 1
                context.commit('category',response.data.category);
            })
        } // -> dispatch('account/login')
    },
    mutations: {
        // run task 1
        category(state,data) {
            return state.category = data;
        } // -> commit('account/login')
    },
}
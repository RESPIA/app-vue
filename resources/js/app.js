/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

// import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }



import { routes } from './routes';

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component("example-component",require("./components/ExampleComponent.vue").default);

Vue.component("admin-master", require("./components/admin/AdminMaster.vue").default);


/*v-form*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


/*sweetalert2 */
import swal from 'sweetalert2'
window.swal = swal;

/* Toastr */

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast
// toast.fire({
//     type: "success",
//     title: "Category add successfully"
// });

/*moment js*/
import {filter} from './filter'

/* vuex */
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from "./store/index"

// store vuex
const store = new Vuex.Store(
    storeData
)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    // store vuex
    store
});

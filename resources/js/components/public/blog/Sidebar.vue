<template>
  <span>
    <div class="span4">
      <aside class="right-sidebar">
        <div class="widget">
          <form class="form-search">
            <input
              @keyup="RealSearch"
              placeholder="Type something"
              v-model="keyword"
              type="text"
              class="input-medium search-query"
            >
            <button
              type="submit"
              @click.prevent="RealSearch"
              class="btn btn-square btn-theme"
            >Search</button>
          </form>
        </div>
        <div class="widget">
          <h5 class="widgetheading">Categories</h5>
          <ul class="cat">
            <li v-for="category in allcategories" :key="category.id">
              <i class="icon-angle-right"></i>
              <router-link :to="`/categories/${category.id}`">{{ category.cate_name}}</router-link>
              <span>(20)</span>
            </li>
          </ul>
        </div>
        <div class="widget">
          <h5 class="widgetheading">Latest posts</h5>
          <ul class="tags">
            <li v-for="post in blogpost" :key="post.id">
              <img
                :src="`assets/admin/posts/${post.photo}`"
                class="pull-left"
                alt
                width="40"
                height="40"
              >
              <p>
                <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
              </p>
              <p>{{post.description | sortlength(100,"....")}}</p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </span>
</template>

<script>
import _ from "lodash";

export default {
  name: "Sidebar",
  data() {
    return {
      keyword: ""
    };
  },
  mounted() {
    // all post show in sidebar
    this.$store.dispatch("latestPost");
    // all category
    this.$store.dispatch("allcategories");
  },
  computed: {
    allcategories() {
      return this.$store.getters.allcategories;
    },
    blogpost() {
      return this.$store.getters.latestpost;
    }
  },
  methods: {
    // RealSearch(){
    //   this.$store.dispatch("SearchPost", this.keyword);
    // }
    RealSearch: _.debounce(function() {
      this.$store.dispatch("SearchPost", this.keyword);
    }, 500)

  }
};
</script>

<style scoped>
</style>


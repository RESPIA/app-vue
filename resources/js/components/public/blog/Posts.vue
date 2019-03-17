<template>
  <span>
    <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="inner-heading">
              <h2>Blog left sidebar</h2>
            </div>
          </div>
          <div class="span8">
            <ul class="breadcrumb">
              <li>
                <a href="#">
                  <i class="icon-home"></i>
                </a>
                <i class="icon-angle-right"></i>
              </li>
              <li>
                <a href="#">Blog</a>
                <i class="icon-angle-right"></i>
              </li>
              <li class="active">Blog with left sidebar </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article v-for="post in blogpost" :key="post.id">
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h4>
                        <a href="#">{{ post.title }}</a>
                      </h4>
                    </div>
                    <img :src="`assets/admin/posts/${post.photo}`" alt="" />
                  </div>
                  <p>
                    {{ post.description | sortlength(500,"...") }}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li>
                        <i class="icon-calendar"></i>
                        <a href="#">{{ post.created_at | timeformat }}</a>
                      </li>
                      <li  v-if="post.user">
                        <i class="icon-user"></i>
                        <a href="#">{{ post.user.name }}</a>
                      </li>
                      <li v-if="post.category">
                        <i class="icon-folder-open"></i>
                        <a href="#">{{ post.category.name }}</a>
                      </li>
                      <li>
                        <i class="icon-comments"></i>
                        <a href="#">4 Comments</a>
                      </li>
                    </ul>
                    <router-link :to="`/post/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link>
                  </div>
                </div>
              </div>
            </article>

            <div id="pagination">
              <span class="all">Page 1 of 3</span>
              <span class="current">1</span>
              <a href="#" class="inactive">2</a>
              <a href="#" class="inactive">3</a>
            </div>
          </div>
          
          <Sidebar/>

        </div>
      </div>
    </section>
  </span>
</template>

<script>
    import Sidebar from "./Sidebar.vue"
    
    export default {
        name: "Posts",
        components:{
            Sidebar
        },
        mounted(){
            this.$store.dispatch('getblogPost');
        },
        computed:{
            blogpost(){
                return this.$store.getters.getBlogPost
            }
        },
        // get all post of category
        methods:{
            getAllCategoryPost(){
                if(this.$route.params.id!=null){
                    // get all post of a category by id
                    this.$store.dispatch('getPostByCatId',this.$route.params.id);
                }else{
                    // get all post
                    this.$store.dispatch('getblogPost');
                }
            }
        },
        watch:{
            $route(to,from){
                this.getAllCategoryPost();
            }
        }
    }
</script>

<style scoped>
</style>


<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post List</h3>
            <div class="card-tools">
              <button class="btn btn-sm btn-primary">
                <router-link to="/posts-add">Add Post</router-link>
              </button>
            </div>
          </div>

          <!-- /.card-header -->
          <div class="card-body">
            <table id="example2" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Content</th>
                  <th>Image</th>
                  <th>Author</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post,index) in getallPost" :key="post.id">
                  <td>{{ index+1 }}</td>
                  <td>{{ post.category.name }}</td>
                  <td>{{ post.title | sortlength(20,"....") }}</td>
                  <td>
                    <div
                      v-if="post.description.length>=8"
                    > {{ post.description | sortlength(40,"....") }}</div>
                  </td>
                  <td>
                    <div
                      v-if="post.description.length>=8"
                    > {{ post.content | sortlength(100,"....")}}</div>
                  </td>
                  <td>
                    <img :src="pathImage(post.photo)" height="66">
                  </td>
                  <td>
                    <a href>{{ post.user.name }}</a>
                  </td>
                  <td>{{ post.created_at | timeformat }}</td>
                  <td>
                    <router-link :to="`/posts-edit/${post.id}`" class="btn btn-sm btn-info">Edit</router-link>
                    <a
                      class="btn btn-sm btn-danger"
                      href
                      @click.prevent="deletePost(post.id)"
                    >Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </section>
</template>
<script>
export default {
  name: "CateList",
  mounted() {
    // dispatch action from index store
    //this.$store.dispatch('allCategory');
    this.$store.dispatch("allPost");
  },
  computed: {
    //this.$store.getters.getCategory
    getallPost() {
      // get data from index file in folder store vie (getters life cire) of getCategory func
      return this.$store.getters.getPost;
    }
  },
  methods: {
    pathImage(img) {
      return "assets/admin/posts/" + img;  
    },
    deletePost(id) {
      axios
        .delete("/posts/" + id)
        .then(() => {
          //console.log(id);
          this.$store.dispatch("allPost");
          toast.fire({
            type: "success",
            title: "delete post successfully"
          });
        })
        .catch(() => {});
    }
  }
};
</script>
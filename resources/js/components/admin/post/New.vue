<template>
  <section class="content mt-2">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-10">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Add New Post</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form" enctype="multipart/form-data" @submit.prevent="addPost()">
              <div class="card-body">
                <div class="form-group">
                  <label for="postId">Post title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="postId"
                    placeholder="Post title"
                    v-model="form.title"
                    name="title"
                    :class="{ 'is-invalid': form.errors.has('title') }"
                  >
                  <has-error :form="form" field="title"></has-error>
                </div>
                <div class="form-group">
                  <label for="descriptionId">Description</label>
                  <textarea
                                        class="form-control"
                                        v-model="form.description"
                                        name="description"
                                        id="description"
                                        rows="4"
                                        :class="{ 'is-invalid': form.errors.has('description') }"
                  ></textarea>
                  <!-- <markdown-editor v-model="form.description"></markdown-editor> -->
                  <!-- <markdown-editor v-model="form.description"></markdown-editor> -->
                  <has-error :form="form" field="description"></has-error>
                </div>
                <div class="form-group">
                  <label for="descriptionId">Content</label>
                  <textarea
                    class="form-control"
                    v-model="form.content"
                    name="content"
                    id="content"
                    :class="{ 'is-invalid': form.errors.has('content') }"
                    rows="10"
                  ></textarea>
                  <!-- <markdown-editor v-model="form.description"></markdown-editor> -->
                  <has-error :form="form" field="content"></has-error>
                </div>
                <div class="form-group">
                  <label>Select Category</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('cate_id') }"
                    v-model="form.cate_id"
                  >
                    <option disabled value>Select One</option>
                    <option
                      :value="category.id"
                      v-for="(category,index) in getallCategory"
                      :key="index"
                    >{{category.cate_name}}</option>
                  </select>
                  <has-error :form="form" field="cate_id"></has-error>
                </div>
                <div class="form-group">
                  <input
                    @change="changePhoto($event)"
                    name="photo"
                    type="file"
                    :class="{ 'is-invalid': form.errors.has('photo') }"
                  >
                  <img :src="form.photo" alt width="80" height="80">
                  
                  <has-error :form="form" field="photo"></has-error>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
          <!-- /.card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        content: "",
        cate_id: "",
        photo: ""
      })
    };
  },
  mounted() {
    this.$store.dispatch("allCategory");
  },
  computed: {
    getallCategory() {
      return this.$store.getters.getCategory;
    }
  },
  methods: {
    changePhoto(event) {
      //console.log(event);
      let file = event.target.files[0];
      if (file.size > 1048576) {
        swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "<a href>Why do I have this issue?</a>"
        });
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          this.form.photo = event.target.result;
          console.log(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    addPost() {
      //console.log(this.form.content);
      this.form
        .post("/posts")
        .then(response => {
          console.log(response.data);
          this.$router.push("/posts-list");

          toast.fire({
            type: "success",
            title: "Post add successfully"
          });
        })
        .catch(e => {
          console.log(e.response.data);
        });
    }
  }
};
</script>

<style scoped>
</style>
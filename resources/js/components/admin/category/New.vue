<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Add Category</h3>
          </div>
          <!-- /.card-header -->
          <form @submit.prevent="addCate">
            <div class="card-body">
              <div class="form-group">
                <label for="">Category name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="form.cate_name"
                  :class="{ 'is-invalid': form.errors.has('cate_name') }"
                >
                <has-error :form="form" field="cate_name"></has-error>
                <small id="helpId" class="text-muted">Help text</small>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-sm btn-primary">Save</button>
              </div>
            </div>
          </form>
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
  name: "CateNew",
  data() {
    return {
      form: new Form({
        cate_name: ""
      })
    };
  },
  methods: {
    addCate() {
      //console.log('ok');
      this.form
        .post("/category")
        .then(response => {
          console.log(response.data);
          this.$router.push("/category-list");

          toast.fire({
            type: "success",
            title: "Category add successfully"
          });
        })
        .catch(e => {
          console.log(e.response.data);
        });
    }
  }
};
</script>

<style>
</style>
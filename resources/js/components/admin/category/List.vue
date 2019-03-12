<template>
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
              <div class="card-tools">
                  <button class="btn btn-sm btn-primary">
                    <router-link to="category-add">Add Category</router-link>
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
                  <th>Created</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category,index) in getallCategory" :key="category.id">
                  <td>{{ index+1 }}</td>
                  <td>{{ category.cate_name }}</td>
                  <td>{{ category.created_at }}</td>
                  <td>
                      <button class="btn btn-sm btn-info">Edit</button>
                      <button class="btn btn-sm btn-danger">Delete</button>
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
    name : "CateList",
    mounted()
    {
        // dispatch action from index store
        //this.$store.dispatch('allCategory');
        this.$store.dispatch('allCategory');
    },
    computed : {
      //this.$store.getters.getCategory
      getallCategory()
      {
        // get data from index file in folder store vie (getters life cire) of getCategory func
        return this.$store.getters.getCategory;
      }
    },
    methods : {

    }
}
</script>

<style>
    
</style>
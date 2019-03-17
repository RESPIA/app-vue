<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Category List</h3>
            <div class="card-tools">
              <button class="btn btn-sm btn-primary">
                <router-link to="/category-add">Add Category</router-link>
              </button>
            </div>
          </div>

          <!-- /.card-header -->
          <div class="card-body">
            <table id="example2" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>
                    <select name id v-model="select" @change="deleteSelected">
                      <option value>Select</option>
                      <option value>Delete all</option>
                    </select>
                    <br>
                    <input type="checkbox" @click.prevent="selectAll" v-model="all_select">
                    <span v-if="all_select==false">Check All</span>
                    <span v-else>Uncheck All</span>
                  </th>
                  <th>STT</th>
                  <th>Category</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category,index) in getallCategory" :key="category.id">
                  <td>
                    <input type="checkbox" v-model="categoryItem" :value="category.id">
                  </td>
                  <td>{{ index+1 }}</td>
                  <td>{{ category.cate_name }}</td>
                  <td>{{ category.created_at | timeformat }}</td>
                  <td>
                    <router-link
                      :to="`/category-edit/${category.id}`"
                      class="btn btn-sm btn-info"
                    >Edit</router-link>
                    <a
                      class="btn btn-sm btn-danger"
                      href
                      @click.prevent="deletecategory(category.id)"
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
  data() {
    return {
      categoryItem: [],
      select: "",
      // select all category
      all_select: false
    };
  },
  mounted() {
    // dispatch action from index store
    //this.$store.dispatch('allCategory');
    this.$store.dispatch("allCategory");
  },
  computed: {
    //this.$store.getters.getCategory
    getallCategory() {
      // get data from index file in folder store vie (getters life cire) of getCategory func
      return this.$store.getters.getCategory;
    }
  },
  methods: {
    deletecategory(id) {
      axios
        .delete("/category/" + id)
        .then(() => {
          this.$store.dispatch("allCategory");
          toast.fire({
            type: "success",
            title: "delete category successfully"
          });
        })
        .catch(() => {});
    },
    deleteSelected() {
      //alert(this.categoryItem);
      console.log(this.categoryItem);
      //console.log(this.select);
      //alert(this.select);
      axios.get("/deletecategory/" + this.categoryItem).then(() => {
        this.categoryItem = [];
        this.$store.dispatch("allCategory");
        toast.fire({
            type: "success",
            title: "delete list category successfully"
          });
      });
    },
    selectAll() {
      if (this.all_select == false) {
        this.all_select = true;
        for (var category in this.getallCategory) {
          this.categoryItem.push(this.getallCategory[category].id);
        }
      }else {
        this.all_select = false;
        this.categoryItem = [];
      }
    }
  }
};
</script>
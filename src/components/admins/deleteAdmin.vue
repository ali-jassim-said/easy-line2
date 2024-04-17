<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="size col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <div class="card">
          <h5 class="text-center mb-4">Delete Admin</h5>
          <form class="form-card" @submit.prevent="deleteAdmin">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-10 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Are you sure you want to delete this admin?</label
                >
              </div>
            </div>
            <div class="row justify-content-end ">
              <div class="form-group col-sm-3">
                <button
                  type="button"
                  class="btn btn-danger px-4"
                  @click="closeDeleteAdmin"
                >
                  Close
                </button>
              </div>
              <div class="form-group col-sm-3">
                <button type="submit" class="btn btn-secondary px-4">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDeleteAdmin() {
      this.$store.state.showDeleteConfirmation = false;
      this.$store.state.deleteConfirmationAdminId = null;
    },

    deleteAdmin() {
      const adminId = this.$store.state.deleteConfirmationAdminId;
      this.$store.dispatch("deleteAdminById", adminId);
      this.closeDeleteAdmin();
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/AddView.css");

label{
	font-size: 18px;
	width: 100%;
}

.size {
  width: 500px;
}
</style>

<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="size col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <div class="card">
          <h5 class="text-center mb-4">Update Admin</h5>
          <form class="form-card" onsubmit="event.preventDefault()">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your name"
                  v-model="admin.name"
                />
              </div>
              <div class="col-sm-5 flex-column d-flex">
                <label class="form-control-label px-3"
                  >picture<span class="text-danger"> *</span></label
                >
                <input
                  type="file"
                  accept="image/*"
                  @change="handleAvatarChange"
                />
               
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >email<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  v-model="admin.email"
                />
              </div>
              <div class="form-group col-sm-6  d-flex justify-content-between text-left check">
                <div class="checkbox-wrapper-65">
                  <label for="cbk1-65" class="flex">
                    <input type="checkbox" id="cbk1-65" v-model="admin.master" />
                    <span class="cbx">
                      <svg width="12px" height="11px" viewBox="0 0 12 11">
                        <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                      </svg>
                    </span>
                    <span>active</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="row justify-content-end">
              <div class="form-group col-sm-3">
                <button
                  type="submit"
                  class="btn-block btn-danger"
                  @click="closeUpdateAdmin"
                >
                  close
                </button>
              </div>
              <div class="form-group col-sm-4">
                <button
                  type="submit"
                  class="btn-block btn-secondary"
                  @click="updateAdmin"
                >
                  Update admin
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
  data() {
    return {
      admin: {
        email: '',
        name: '',
        master: null
      },
      id: null,
      admins: []
    };
  },
  mounted() {
    this.id = this.$store.state.updateAdminId;
    this.admins = this.$store.state.admins.allAdmin || [];
    this.loadAdmin();
  },
  methods: {
    closeUpdateAdmin() {
      this.$store.state.UpdateAdmin = false;
    },
    loadAdmin() {
      if (this.admins.length > 0) {
        this.admin = this.admins.find(admin => admin.id === this.id);
      }
    },
    updateAdmin() {
      this.$store.dispatch('update', {id: this.id, data: this.admin});
      this.closeUpdateAdmin();
    }
  }
};
</script>


<style scoped>
@import url("../../assets/css/AddView.css");


</style>

<template>
  <section class="content">
    <main>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Admins</h3>
            <span class="span-add" @click="toggleAddAdmin()"> Add admin </span>
          </div>
          <div class="flex">
            <div v-if="loading" class="loading-spinner"></div>
          </div>
          <table v-if="pagedAdmins.length > 0">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in pagedAdmins" :key="admin.id">
                <td>
                  <img :src="admin.avatar" alt="" />
                  <p>{{ admin.name }}</p>
                </td>
                <td>{{ admin.email }}</td>
                <td>
                  <div class="status-pending" :class="{ 'status-active': admin.master, 'status-inactive': !admin.master }"> {{ admin.master ? 'active' : 'disabled' }} </div>
                </td>
                <td>
                    <span class="span-edit" @click="toggleUpdateAdmin(admin.id)">
                      <i class="ri-pencil-line"></i>
                      update
                    </span>
                </td>
                <td>
                  <span class="span-edit delete" @click="toggleDeleteAdmin(admin.id)">
                    <i class="ri-delete-bin-line"></i>
                    
                    Delete
                  </span>
                </td>
                <td>
                    <span class="span-edit">
                      <i class="ri-information-line"></i>
                      Info
                    </span>
                </td>
              </tr>
            </tbody>
           
          </table>
         
          <div v-else>
            <div class="flex">
              <p>No admins available.</p>
            </div>
          </div>
          <div v-if="pagedAdmins.length > 0" class="clearfix align-center">
            <div class="hint-text">
              Showing <b>{{ startIndex + 1 }}</b> to <b>{{ endIndex + 1 }}</b> out of <b>{{ admins.length }}</b> admins
            </div>
            <ul class="pagination center">
              <li class="page-item">
                <button class="page-link" :disabled="currentPage === 1" @click="prevPage">
                  <i class="ri-arrow-left-s-line"></i> Previous
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" :disabled="endIndex === admins.length - 1" @click="nextPage">
                  Next <i class="ri-arrow-right-s-line"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </section>
  <add-admin class="modal-overlay" v-show="showAddAdmin"/>
  <DeleteConfirmationModal class="modal-overlay" v-show="showDeleteConfirmation"  />
  <update-admin class="modal-overlay" v-if="showUpdateAdmin"/>
</template>

<script>
import addAdmin from '../../components/admins/addAdmin.vue';
import DeleteConfirmationModal from '../../components/admins/deleteAdmin.vue';
import UpdateAdmin from '../../components/admins/updateAdmin.vue';
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4
    };
  },
  components: { addAdmin, DeleteConfirmationModal, UpdateAdmin },
  name: "adminView",
  
  computed: {
    admins() {
      return this.$store.state.admins.allAdmin || [];
    },
    loading() {
      return this.$store.state.admins.loading;
    },
    showAddAdmin(){
      return       this.$store.state.AddAdmin
    },
    showUpdateAdmin(){
      return       this.$store.state.UpdateAdmin
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return Math.min(this.currentPage * this.itemsPerPage - 1, this.admins.length - 1);
    },
    pagedAdmins() {
      return this.admins.slice(this.startIndex, this.endIndex + 1);
    },
    showDeleteConfirmation() {
    return this.$store.state.showDeleteConfirmation
  },
  
  },
  mounted() {
    this.$store.dispatch("admins");
  },
  methods: {
    toggleAddAdmin() {
        this.$store.state.AddAdmin = !this.$store.state.AddAdmin; 
    },
    toggleDeleteAdmin(adminId){
      this.$store.commit('setDeleteConfirmationAdminId', adminId);
    this.$store.state.showDeleteConfirmation = true;
    },
    toggleUpdateAdmin(adminId){
      this.$store.commit('setAdminId', adminId);
    this.$store.state.UpdateAdmin = true;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.endIndex < this.admins.length - 1) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/table");

</style>

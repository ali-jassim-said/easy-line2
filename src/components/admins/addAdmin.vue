<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="size col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <div class="card">
          <h5 class="text-center mb-4">Add Admin</h5>
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
                  v-model="name"
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
                  v-model="email"
                />
              </div>
              <div class="form-group col-sm-6  d-flex justify-content-between text-left check">
                <div class="checkbox-wrapper-65">
                  <label for="cbk1-65" class="flex">
                    <input type="checkbox" id="cbk1-65" v-model="master" />
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
                  @click="closeAddAdmin"
                >
                  close
                </button>
              </div>
              <div class="form-group col-sm-4">
                <button
                  type="submit"
                  class="btn-block btn-secondary"
                  @click="addAdmin"
                >
                  Add admin
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
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "addAdmin",
  data() {
    console.log(this.name);
    return {
      v$: useValidate(),
      email: null,
      master: false,
      name: null,
      avatar: null,
      avatarPreview: null,
    };
  },
  validations() {
    return {
      email: { required },
      master: { required },
      name: { required },
    };
  },

  computed: {
    dialogVisible() {
      return this.$store.state.AddAdmin;
    },
  },
  methods: {
    addAdmin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const form = {
          email: this.email,
          master: this.master,
          name: this.name,
          avatar: this.avatar,
        };
        this.$store.dispatch("add", form);
        this.$store.state.AddAdmin = false;
      }
    },
    closeAddAdmin() {
      this.$store.state.AddAdmin = false; // Set the dialog state to false to close the component
    },
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Read the file and set it to the data property
        this.avatar = file;
        // Display a preview of the image
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarPreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/AddView.css");


</style>

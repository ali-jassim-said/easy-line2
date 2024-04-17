import { createStore } from 'vuex'

import { login } from './login/login'
import { admins } from './admin/getAdmins';
import { addAdm } from './admin/addAdmin'
import { updateAdm } from './admin/updateAdmin'
import { deleteAdm } from './admin/deleteAdmin'
import { getAdm } from './admin/getAdmin'


export default createStore({
  state: {
    Icon: false,
    loading: false,
    AddAdmin: false,
    UpdateAdmin: false,
    allAdmin: [],
    showDeleteConfirmation: false,
    deleteConfirmationAdminId: null,
    updateAdminId: null,
  },
  getters: {
  },
  mutations: {
    toggleIconState(state) {
      state.Icon = !state.Icon;
    },
    setDeleteConfirmationAdminId(state, adminId) {
      state.deleteConfirmationAdminId = adminId;
    },
    setAdminId(state, value) {
      state.updateAdminId = value;
    },
   
  },
  actions: {
  },
  modules: {
    login: login,
    admins: admins,
    addAdm: addAdm,
    updateAdm: updateAdm,
    deleteAdm: deleteAdm,
    getAdm: getAdm,
  }
})

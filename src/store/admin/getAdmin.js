import { getAdmin } from "@/api/admins";


export const getAdm = { // Changed the name of the store module to deleteAdm for clarity
  state: {
    admin: {}
  },
  mutations: {
    SET_ADMIN(state,res){
      state.admin = res
    }
  },
  actions: {
    getAdminInfoById({commit}, payload) {
        getAdmin(payload) 
          .then((res) => {
            if (res.status === 200) { 
              commit('SET_ADMIN', res.data.data);
            } else {
              console.log("Failed to get admin information");
            }
          })
          .catch(err => {
            console.log('Error getting admin information:', err);
          });
      }
  }
}
import { deleteAdmin } from "@/api/admins";



export const deleteAdm = { 
  state: {
  
  },
  mutations: {

  },
  actions: {
    deleteAdminById( {state, dispatch}, adminId) { 
      deleteAdmin(adminId) 
        .then((res) => {
          if (res.status === 200) { 
            dispatch('admins', {root: true});
          } else {
            console.log("Failed to delete admin")
          }
        })
        .catch(err => {
          console.error('Error deleting admin:', err);
          console.log(state)
        });
    }
  }
}
import { getAdmins } from "@/api/admins";

export const admins = {
    state: {
  
    },
    mutations: {
        SET_ADMINS(state, allAdmin){
            state.allAdmin = allAdmin
        },
        SET_LOADING(state, loading) { 
          state.loading = loading;
        }
      },
    actions: {
        admins({ commit }){
          commit('SET_LOADING', true)
            getAdmins().then((res) => {
                commit('SET_ADMINS', res.data.data); 
            }).catch(err => {
              console.log(err)
            }).finally(() => {
              commit('SET_LOADING', false);
            })
        }
      },
}

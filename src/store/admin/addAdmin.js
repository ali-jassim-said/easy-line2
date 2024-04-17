import { addAdmin } from '@/api/admins'


export const addAdm = {
    state: {
      },
    mutations: {
      SET_DIALOG(state, value) {
        state.AddAdmin = value;
      }
      },
    actions: {
        add({commit, dispatch}, payload){

            addAdmin(payload).then((res) => {
                if(res.status === 200){
                  commit('SET_DIALOG', false);
                  dispatch('admins', {root: true});
                }
            }).catch(err => {
              console.log(err)
            })
        } 
      },
}
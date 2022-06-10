import Vue from "vue";
import Vuex from "vuex";
import {api} from "@/common/api";
import router from "@/router";
import {setAccessToken,getAccessToken} from "@/common/access_token";

Vue.use(Vuex)

const state={
    access_token: getAccessToken(),
}
const mutations={
    setToken(state,access_token){
        state.access_token=access_token
    }
}
const actions={
    async setPhone({commit},data){
        try {
            let res_login=await api.login(data)
            if (res_login){
                router.push({ path: '/home' });
            }
            setAccessToken(res_login.token)
            commit('setToken',res_login.token)
        }catch (err){
            console.log(err)
        }

    }
}

const store=new Vuex.Store({
    state,
    mutations,
    actions,
    }
)

export default store

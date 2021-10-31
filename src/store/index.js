import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
let store =  new Vuex.Store({
    state:{
        imgSrc:'',
        userInfo: '',
        result:''
    },
    getters:{
        getimgSrc(state){
            return state.imgSrc
        },
        getresult(state){
            return state.result
        }
    },
    mutations:{
        login (state, v) {
            state.userInfo = v
          },
        setimgSrc(state,name){
            state.imgSrc = name;
        },
        setresult(state,a){
            state.result = a;
        }
    },
    actions:{
        passimgSrc({commit,state},name){
            commit('setimgSrc',name)
        },
        passresult({commit,state},a){
            commit('setresult',a)
        }
    }
})
export default store
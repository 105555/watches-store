export default {
    namespaced: true,
    state() {
        return {
            userInfo: [], 
            loginState:false,
        }
    },
    mutations: {
        setUser(state, data)  {
            state.userInfo = data;
        },
        setLoginState (state, data){
            state.loginState = data
        }
    }
}
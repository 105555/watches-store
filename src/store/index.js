import { createStore } from 'vuex'
import cart from './cart'
import user from './user'

export default createStore({
    modules:{
        cart,
        user
    },
})
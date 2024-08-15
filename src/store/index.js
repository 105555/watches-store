import { createStore } from 'vuex'
import cart from './cart'
import user from './user'
import i18n from './i18n'

export default createStore({
    modules:{
        cart,
        user,
        i18n
    },
})
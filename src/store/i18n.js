import i18n from '../plugins/i18n'

export default {
    namespaced: true,
    state(){
        return {
            language: 'zh'
        }
    },
    mutations:{
        setLanguage(state, lang){
            state.language = lang;
            i18n.global.locale.value = lang
        }
    },
    actions:{
        changeLanguage({commit}, lang){
            commit('setLanguage', lang);
        }
    },
    getters: {
        currentLanguage: state => state.language
    }
}
/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import i18n from './i18n'
export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(i18n)
}
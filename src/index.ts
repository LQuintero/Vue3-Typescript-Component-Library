import { App, Plugin } from 'vue'

import BaseButton from'./components/BaseButton.vue'

export default {
    install(Vue: App) {
        Vue.component(BaseButton.name, BaseButton)
    }
} as Plugin

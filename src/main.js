import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as componentsVuetify from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/style.css'
import PrimeVue from 'primevue/config';

const vuetify = createVuetify({
    components: {
        VDataTable,
    },
    componentsVuetify,
    directives,
})

createApp(App)
    .use(store)
    .use(vuetify)
    .use(PrimeVue)
    .use(ElementPlus)
    .mount('#app')

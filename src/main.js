import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/style.css'

const vuetify = createVuetify({
    components: {
        VDataTable
    },
    directives,
})

createApp(App)
    .use(store)
    .use(vuetify)
    .mount('#app')

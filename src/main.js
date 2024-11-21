import { createApp } from 'vue'
import App from './App.vue'

import vIconDirective from './directives/v-icon.directive.js';

const app = createApp(App);

app.directive('icon', vIconDirective);

app.mount('#app');
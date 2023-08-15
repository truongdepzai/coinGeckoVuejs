import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router/routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faStar, faShare, faSearch} from '@fortawesome/free-solid-svg-icons'
library.add(faBell, faStar, faShare,faSearch)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')

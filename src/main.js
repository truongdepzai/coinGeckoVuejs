import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router/routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faStar, faShare, faSearch, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faBell, faStar, faShare,faSearch,faArrowLeft,faArrowRight,faReddit,faFacebook,faTwitter,faGithub)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')

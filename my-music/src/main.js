import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import { Header, Loadmore, Swipe, SwipeItem, Button,MessageBox, Toast, Spinner, Tabbar, TabItem } from 'mint-ui'

Vue.use(MintUI)

Vue.config.productionTip = false
import 'common/stylus/index.styl'
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

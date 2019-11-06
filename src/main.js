import "~/styles/main.scss"
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.prototype.$settings = require('../config/site.json')
}

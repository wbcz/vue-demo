import Vue from 'Vue'
import Store from './vuex/store'
import App from './App.vue'
import VueRouter from 'vue-router'
import ConfigRouter from './router'

Vue.use(VueRouter);
var router = new VueRouter();
ConfigRouter(router);

router.redirect({
	'*': '/'
})

router.start(App, '#root');




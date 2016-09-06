import index from './modules/index'
import Vuex from 'Vuex'
import Vue from 'Vue'
Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		index
	}
})
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import tasks from './modules/tasks';

export const store = new Vuex.Store({
	modules: {
		tasks,
	},
	strict: process.env.NODE_ENV !== 'production'
});
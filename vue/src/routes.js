import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Tasks from './components/Tasks';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'tasks'}
	},
	{
		name: 'tasks',
		path: '/tasks',
		component: Tasks,
		beforeEnter(from, to, next){
			store.dispatch('tasks/loadItems');
			next();
		}
	},
]

export const router = new VueRouter({
	routes,
	mode: 'history'
});
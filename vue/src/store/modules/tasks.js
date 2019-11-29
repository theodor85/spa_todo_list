import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		items: []
	},
	getters: {
		items(state){
			return state.items;
		}
	},
	mutations: {
		loadItems(state, data){
			state.items = data;
		},
		clearItems(state){
			state.items = [];
		},
	},
	actions: {
		loadItems(store){
			store.commit('clearItems');

			Vue.http.get('tasks/')
					  .then(response => response.json())
					  .then(data => {
					  	 store.commit('loadItems', data);
					  });
		}
	}
}

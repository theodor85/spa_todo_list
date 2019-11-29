<template>
	<div>
		<ul>
      		<li v-for="task in tasks" :key="task.id">{{ task.text }}</li>
    	</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

	computed: {
		...mapGetters('tasks', {
			tasks: 'items'
		})
	},
}

</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>
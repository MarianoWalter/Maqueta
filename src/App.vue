<template>
	<div id="app">
		<Header
			:visible="true"
			:titulo="'Maqueta'"
		></Header>
		<!-- TODO Carrusel -->
		<!-- TODO Lista de Productos -->
		<!-- TODO Banner -->
		<!-- TODO Footer -->
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'app',
	components: {
		Header,
	},
};
</script>

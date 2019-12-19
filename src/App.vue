<template>
	<div id="app">

		<Header
			:visible="true"
			:titulo="'Maqueta'"
		></Header>

		<div class="container-fluid">

			<Carousel
				:navigation="true"
				:items="[
					{ text: 'Redefiniendo la experiencia del cliente', sub: 'en las salas de espera' },
					{ text: 'Segundo texto de ejemplo', sub: 'para ver cómo queda' },
					{ text: 'Otro texto más', sub: 'para testing' },
				]"
			></Carousel>

			<!-- TODO Lista de Productos -->
			<!-- TODO Banner -->
			<!-- TODO Footer -->
		</div>

	</div>
</template>

<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';

export default {
	name: 'app',
	components: {
		Header,
		Carousel,
	},
};
</script>

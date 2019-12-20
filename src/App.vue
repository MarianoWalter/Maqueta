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

			<ListaProductos
				:productos="[
					{
						nombre: 'Producto 1',
						descripcion: 'Descripción del producto 1 para pruebas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatum ad placeat accusamus vel, iusto possimus, atque quas deserunt minima necessitatibus eligendi aperiam dolor, a incidunt voluptates magnam illo ipsa.',
					},
					{
						nombre: 'Producto 2',
						descripcion: 'Descripción del producto 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda, fuga dolore tempora repellendus quos adipisci ab ipsum, tempore amet suscipit cumque consequatur sunt incidunt dolores magni illo distinctio asperiores.',
					},
					{
						nombre: 'Producto 3',
						descripcion: 'Descripción del producto 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, cupiditate expedita. Veniam, quidem unde? Esse placeat sint minus a fugit voluptates repellat ipsum praesentium non ut assumenda nisi, maxime quos.',
					},
				]"
			></ListaProductos>

			<Banner
				textoGrande="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo tempora nostrum ab minima possimus."
				textoChico="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos illum voluptates atque molestiae, debitis, obcaecati magnam."
			></Banner>

			<Footer></Footer>
		</div>

	</div>
</template>

<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import ListaProductos from './components/ListaProductos.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		Header,
		Carousel,
		ListaProductos,
		Banner,
		Footer,
	},
};
</script>

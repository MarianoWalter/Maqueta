<template>
	<div id="carrusel" class="carousel slide" data-ride="carousel">
		<ol
			class="carousel-indicators"
			v-show="navigation"
		>
			<li
				data-target="#carrusel"
				v-for="(i, index) in items"
				:key="'carrusel-item-' + index"
				:data-slide-to="index"
				:class="{ active: actual == index }"
			></li>
		</ol>

		<div class="carousel-inner">
			<div
				class="item"
				v-for="(i, index) in items"
				:key="index"
				:class="{ active: actual == index }"
			>
				<div class="item-carrusel">
					<h3>{{ i.text }}</h3>
					<h4>{{ i.sub }}</h4>
				</div>
				<!-- <img :src="BackgroundImage" alt=""> -->
			</div>
		</div>

		<!-- Left and right controls -->
		<a
			class="left carousel-control"
			href="#carrusel"
			data-slide="prev"
			v-if="navigation"
		>
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Anterior</span>
		</a>
		<a
			class="right carousel-control"
			href="#carrusel"
			data-slide="next"
			v-if="navigation"
		>
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Siguiente</span>
		</a>
	</div>
</template>

<script>
// import BackgroundImage from '@/assets/header.jpg';

export default {
	name: 'carousel',
	data() {
		return {
			// BackgroundImage,
			actual: 0,
		};
	},
	props: {
		navigation: {
			type: Boolean,
			required: false,
			default: true,
		},
		items: {
			default: [],
		},
	},
};
</script>

<style scoped>
.item-carrusel {
	background-image: url('../assets/header.jpg');
	background-size: cover;
	height: 200px;
	text-align: center;
	color: white;
}

.item-carrusel h3,
.item-carrusel h4 {
	text-shadow: 2px 2px 3px black;
}

.item-carrusel h3 {
	margin-top: 0px;
	padding-top: 50px;
}

.carousel {
	margin-left: -15px;
	margin-right: -15px;
}
</style>

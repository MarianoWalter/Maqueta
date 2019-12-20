<template>
	<div class="item-producto">
		<h4 class="text-center">
			{{ producto.nombre }}
		</h4>

		<div class="item-descripcion text-center">
			{{ producto.descripcion }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'item-producto',
	props: ['producto'],
};

</script>

<style scoped>
.item-producto {
	box-shadow: 0px 5px 20px 0px gray;
	padding: 10px;
}

.item-descripcion {
	line-height: 1.7;
}
</style>

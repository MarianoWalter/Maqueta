<template>
	<div>
		<h3 class="text-center">Productos</h3>

		<br>

		<div class="row">
			<div
				class="col-xs-12 col-sm-4"
				v-for="(producto, index) in productos"
				:key="index"
				style="margin-bottom: 20px"
			>
				<a href="#" class="link-sin-estilo">
					<ItemProducto :producto="producto" ></ItemProducto>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import ItemProducto from './ItemProducto';

export default {
	name: 'lista-productos',
	props: {
		productos: {
			default: [],
			required: true,
		},
	},
	components: {
		ItemProducto,
	},
};
</script>

<style scoped>
.link-sin-estilo {
	color: inherit;
	text-decoration: none;
}
</style>

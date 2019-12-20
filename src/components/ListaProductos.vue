<template>
	<div>
		<h3 class="text-center">Productos:</h3>

		<br>

		<div class="row">
			<div
				class="col-xs-12 col-sm-4"
				v-for="(producto, index) in productos"
				:key="index"
				style="margin-bottom: 20px"
			>
				<ItemProducto :producto="producto" ></ItemProducto>
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

<template>
	<div class="banner text-center">
		<h4>
			{{ textoGrande }}
		</h4>
		<h6>
			{{ textoChico }}
		</h6>
	</div>
</template>

<script>
export default {
	name: 'banner',
	props: {
		textoGrande: String,
		textoChico: String,
	},
};
</script>

<style scoped>
.banner {
	background-color: #DFE6B0;
	margin-left: -15px;
	margin-right: -15px;
	padding: 5px;
}
</style>

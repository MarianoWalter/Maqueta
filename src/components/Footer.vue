<template>
	<footer>

		<div class="row">
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Nosotros</b>
				<div>Inicio</div>
				<div>Quiénes somos</div>
			</div>
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Nuestra Empresa</b>
				<div>Nosotros</div>
				<div>Partners</div>
			</div>
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Support</b>
				<div>Apoyo Técnico</div>
				<div>Aplicación de Turnos</div>
			</div>
		</div>

	</footer>
</template>

<script>
export default {
	name: 'app-footer',
};
</script>

<style scoped>
footer {
	margin-left: -15px;
	margin-right: -15px;
	padding: 20px 10px 10px 10px;
	background-color: #3C3D41;
	color: white;
}

footer .footer-col {
	text-align: center;
	margin-bottom: 10px;
}

.row {
	margin: 0px;
}
</style>

<template>
	<footer>

		<div class="row">
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Nosotros</b>
				<div>
					<a href="#">Inicio</a>
				</div>
				<div>
					<a href="#">Quiénes somos</a>
				</div>
			</div>
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Nuestra Empresa</b>
				<div>
					<a href="#">Nosotros</a>
				</div>
				<div>
					<a href="#">Partners</a>
				</div>
			</div>
			<div class="footer-col col-xs-12 col-sm-4">
				<b>Support</b>
				<div>
					<a href="#">Apoyo Técnico</a>
				</div>
				<div>
					<a href="#">Aplicación de Turnos</a>
				</div>
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

footer .footer-col a {
	/* text-decoration: none; */
	color: inherit;
}

.row {
	margin: 0px;
}
</style>

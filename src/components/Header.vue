<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header" v-if="visible">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">
					{{ titulo }}
				</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">

					<li class="active"><a href="#"> INICIO </a></li>

					<li><a href="#"> NOSOTROS </a></li>

					<li class="dropdown">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							INDUSTRIA
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Otro item</a></li>
							<li role="separator" class="divider hidden-xs"></li>
							<li><a href="#">El último (separado en sm, md y lg)</a></li>
						</ul>
					</li>

					<li class="dropdown">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							PRODUCTOS
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Otro item</a></li>
							<li role="separator" class="divider hidden-xs"></li>
							<li><a href="#">El último (separado en sm, md y lg)</a></li>
						</ul>
					</li>

					<li class="dropdown">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							MEDIA
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Otro item</a></li>
							<li role="separator" class="divider hidden-xs"></li>
							<li><a href="#">El último (separado en sm, md y lg)</a></li>
						</ul>
					</li>

					<li><a href="#"> CONTACTENOS </a></li>

				</ul>

				<!-- <form class="navbar-form navbar-left">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Buscar...">
					</div>
					<button type="submit" class="btn btn-default">Buscar</button>
				</form> -->

				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#">
							<i class="glyphicon glyphicon-log-in"></i>
							<span style="margin-left: 5px;"> Ingresar </span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="glyphicon glyphicon-search"></i>
							<span style="margin-left: 5px;"> Buscar Oficina </span>
						</a>
					</li>

					<!-- <li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">Dropdown <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
					</li> -->
				</ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>
</template>

<script>
export default {
	name: 'Header',
	props: {
		titulo: String,
		visible: {
			type: Boolean,
			default: true,
			required: false,
		},
	},
};
</script>

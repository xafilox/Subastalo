<div id="barra">
	<div id="homeButton">
		<a href=index.php>
			<img src=images/subastalo.png>
		</a>
	</div>	
{if $nivelAcceso > 0}
	<div id="lista" class="list" >
  			<div class="listElement" id="edperfil">Editar Perfil</div>
  			<div class="listElement" id="cambiarC">Cambiar Contraseña</div>
  			{if $aceptaMsg==1}
  				<div class="listElement" id="recibirMsg">Deshabilitar Mensajes Privados</div>
  			{else}
  						<div class="listElement" id="recibirMsg">Habilitar Mensajes Privados</div>
  			{/if}
	</div>
	<div id="panelDiv" class="menu_element">{$nombreUsuario} </div>	
	<div id="logoutDiv" class="menu_element" >Logout</div>
{else}
	<div id="altaDiv" class="menu_element">Alta</div>
	<div id="loginDiv" class="menu_element">Login</div>
{/if}

<div class="barraBusqueda">
		<input type="text" id="palabra_clave" name="palabra_clave">
		<input type="button" id="buscar" value="Buscar">
	</div>
{if $nivelAcceso > 1 && !$IN_ADMIN}
<div id="adminDiv" class="menu_element">Admin</div>
{/if}
</div>
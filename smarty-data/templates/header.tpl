<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>{$title|default:"Página de subastas"}</title>
		<script src="{$IS2_ROOT_PATH}js/jquery-2.0.3.min.js"></script>
		<script src="{$IS2_ROOT_PATH}js/jquery-ui-1.10.3.custom.min.js"></script>
		<script src="http://autobahn.s3.amazonaws.com/js/autobahn.min.js"></script> 
		<script src="{$IS2_ROOT_PATH}js/common.js"></script>
		{if $IN_ADMIN}
			<script src="{$IS2_ROOT_PATH}js/admin/leftmenu.js"></script>
		{/if}
		{if !empty($scripts)}
			{foreach $scripts as $script}
				<script src="{$IS2_ROOT_PATH}js/{$script}"></script>
			{/foreach}
		{/if}
		{if !empty($cssFiles)}
			{foreach $cssFiles as $css}
				<LINK href="{$IS2_ROOT_PATH}css/{$css}">
			{/foreach}
		{/if}
		<LINK href="{$IS2_ROOT_PATH}css/framePrincipal2.css" rel="stylesheet" type="text/css">
		<LINK href="{$IS2_ROOT_PATH}css/common.css" rel="stylesheet" type="text/css">
		<LINK href="{$IS2_ROOT_PATH}css/tablesorter/style.css" rel="stylesheet" type="text/css">
		<LINK href="{$IS2_ROOT_PATH}css/tablesorter/jq.css" rel="stylesheet" type="text/css">
		<LINK href="{$IS2_ROOT_PATH}css/ui-lightness/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css">
		{if !empty($css)}
			{foreach $css as $uncss}
				<LINK href="{$IS2_ROOT_PATH}css/{$uncss}" rel="stylesheet" type="text/css"></script>
			{/foreach}
		{/if}
	</head>
	<body onload="initCommonUtilities()" style="margin:0px;padding:0px;overflow:hidden">
		<script type="text/javascript">
			var USER_ACCESS_LEVEL = {$USER_ACCESS_LEVEL};
		</script>
		{if $IS_CONTENT}
		<div class="globalContainer">
		{/if}
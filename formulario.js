var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	/*$button = $('#mostrar-form'),*/
	$primerPost = $('.item').first(),
	$lista = $('#contenido');

if(localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function()
	{
		sessionStorage.setItem('titulo', $titulo.val());
		sessionStorage.setItem('url', $url.val());
	}, 
	1000);

function mostrarOcultarFormulario(evento)
{
	evento.preventDefault();
	evento.stopPropagation();
	$form.slideToggle();
	$lista.slideToggle();
	/*return false;*/
}

function agregarPost(evento)
{
	evento.preventDefault();
	evento.stopPropagation();
	var titulo = $titulo.val(),
		url = $url.val(),
		//$clone = $primerPost.clone();
		clone = $primerPost.clone();

	//$clone.find('.titulo_item a')
	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	//$clone.hide()
	clone.hide();

	$lista.prepend(clone/*$clone*/);

	mostrarOcultarFormulario();
    $titulo.val('');
    $url.val('');

	//$clone.slideDown();
	clone.slideDown();

	/*return false;*/
}

function grabarInformacion(evento)
{
	evento.preventDefault();

	var titulo = $titulo.val(),
		url	   = $url.val(),
		ls     = localStorage,
		ss 	   = sessionStorage;

	ls.setItem('titulo', titulo);
	ls.setItem('url', url);

	ss.setItem('titulo', titulo);
	ss.setItem('url', url);

	mostrarOcultarFormulario();
	$titulo.val("");
	$url.val("");	
}


	//Eventos (Escuchar)
	/*$form.on('submit', agregarPost);
	$button.click(mostrarOcultarFormulario);*/
	$('#publicar_nav a').click(mostrarOcultarFormulario);
	$('#formulario').on('submit', agregarPost);

	/*$('#formulario')   muestra texto en un input
		.on('submit', agregarPost)
		.find('#url')
		.on('focus', function()
			{
				$('#url').val('http://');
			})
		.on('blur', function()
			{
				$('#url').val('');
			});*/

/**/
$('nav').on('click', function(){console.log("Soy un nav y me hicieron click");});
$('nav ul').on('click', function(){console.log("Soy un ul y me hicieron click");});
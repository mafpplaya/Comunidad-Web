var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	/*$button = $('#mostrar-form'),*/
	$lista = $('#contenido'),
	$primerPost = $('.item').first();

function mostrarOcultarFormulario()
{
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}

function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $primerPost.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide()

	$lista.prepend($clone);

	mostrarOcultarFormulario();
	$clone.slideDown();

	return false;
}

	//Eventos (Escuchar)
	/*$form.on('submit', agregarPost);
	$button.click(mostrarOcultarFormulario);*/
	$('#publicar_nav a').click(mostrarOcultarFormulario);
	$('#formulario').on('submit', agregarPost);
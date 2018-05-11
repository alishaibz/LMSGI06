//DECLARACIÓN DE VARIABLES
var cargado = 1;

//****************************************************************************************************

//Se definen los eventos sobre los elementos y otras acciones

//Al hacer scroll hasta el final de la página, cargar noticias desde ficheros .json
$(window).scroll(function () {
	if ($(window).scrollTop() + $(window).height()>= $(document).height()) {
		if (cargado <=2) {
            		$.getJSON("https://rawgit.com/alishaibz/LMSGI06/master/json/data" + cargado + ".json", function (jsonObject) {
                	addrow(jsonObject);
            	}); cargado++;
        	} else {
            		$('#boton_mas').text('No hay más noticias');
        	}
    	}
});

//Cargar el contenido de un fichero .json
function cargar() {
    if (cargado <= 2) {
        $.getJSON("https://rawgit.com/alishaibz/LMSGI06/master/json/data" + cargado + ".json", function (jsonObject) {
            addrow(jsonObject);
        });cargado++;
    } else {
        $('#boton_mas').text('No hay más noticias');
    }
};

//Añadir las noticia contenidas en el fichero .json al fichero news.html
function addrow(json) {
    $(".notis").append("<div class='row noticias_" + cargado + "'>");
    $.each(json, function (i, item) {
        $(".noticias_" + cargado).append('<div class="col-md-4">' + '<a href="news.html">' + '<div class="pic_div">' + '<img src="' + item.imgmid + '" class="news_pic" alt="Image">' + '</div>' + '<div class="caption">' + '<h4 class="text-justify">' + item.title + '</h4>' + '<p class="text-justify">' + item.description + '</p>' +
	'<p class="text-right">' + '<em>' + item.datetime + '</em>' + '</p>' + '</div>' + '</a>' + '</div>');
    })
};
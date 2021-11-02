/** @format */

var listaCertficates = [
	' https://hermes.digitalinnovation.one/certificates/cover/E753C548.jpg ',
	'https://hermes.digitalinnovation.one/certificates/cover/0965CA0C.jpg',
];

var linkCertficates = [
	' https://certificates.digitalinnovation.one/E753C548',
	'https://certificates.digitalinnovation.one/0965CA0C',
];

var covers = document.getElementById('covers');

for (var i = 0; i < listaCertficates.length; i++) {
	covers.innerHTML += "<img class='cover' src=" + listaCertficates[i] + '>';
}

var covers = document.getElementById('covers');

for (var i = 0; i < linkCertficates.length; i++) {
	link.innerHTML +=
		"<a class='cover' 'target=_blank' ' href=" +
		linkCertficates[i] +
		'>Link</>';
}

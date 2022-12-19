var articulos = [
	{ nombre: 'celular', precio: 1000 },
	{ nombre: 'laptop', precio: 1500 },
	{ nombre: 'pc', precio: 20000 },
	{ nombre: 'teclado', precio: 100 },
	{ nombre: 'mouse', precio: 70 },
	{ nombre: 'auto', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// Método Map
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

console.log(articulosFiltrados);
console.log(nombreArticulos);

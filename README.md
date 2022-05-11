# E-comerce Frontera Living

El proyecto aun esta un desarrollo, pero la idea es poder finalizarlo con una tienda online de los productos de la empresa Frontera Living.

## Components

Los componentes los tengo separados cada uno con su carpeta, estan anidados tal como se usan en el proyecto.
Componentes de uso único:

### Componentes anidados

- ItemDetailContainer
    -
    ItemDetail
- ItemListContainer
    -
    -ItemList
    --Item
- NavBar
    -
    -CartWidget
    -Categories
- CartContainer
    -

El componente Categoties, es un array de objetos con cada categoria que luego uso para mapearlas un mi NavBar.


### Componentes usados a lo largo del proyecto

- Button
    -
- ItemCount
    -
- Loading
    -

## Pages

Aun no las estoy utilizando pero la idea es que cada Página se vea reflejada en cada uno de estos componentes.

- Home
    -
- Detail
    -
- Cart
    -

## Services

Dentro de Services tengo mi archivo getData.js, en el cual tengo todos mis productos utilizados.
Como la SPA la estoy desarrollando con productos de la empresa Frontera Living y no tiene una API para poder consumir lo hago desde una Promise.

## Navegabilidad

Cada ruta fue por requerimiento y buscan ser explícitas para brindar una buena UX.
Se basa en 3 páginas antes mencionadas, cada una con sus parametros de filtro, se puede pasar de una a otra sin tener que recargar.
Por ahora el Home solo muestra el catalogo completo de productos, en el cual luego se puede filtrar por categorias de sofa o rinconero.
Detail muestra los detalles del producto seleccionado con la posibilidad de agregar tal producto al carrito, e ir hacia su página.

## Imágenes y estilos

Todas las url son tomadas del sitio web de la empresa 'http://fronteraliving.com/'

Los estilos CSS en su gran mayoria son de desarrollo propio, aunque esta linkeado el CSS online de Bootstrap para utilizarlos por ejemplo en los estilos de las "cards"

## Dependencias

- react
    -
- react-router-dom
    -
- bootstrap
    -
- jquery
    -
- popper.js

# Introducción a Create React App

Este proyecto fue arrancado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

En el directorio del proyecto, puede ejecutar:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`
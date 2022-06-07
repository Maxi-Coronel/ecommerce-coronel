# E-comerce Frontera Living

El proyecto aun esta un desarrollo, pero la idea es poder finalizarlo con una tienda online de los productos de la empresa Frontera Living.

## Components

Los componentes estan separados en las carpetas Common (donde estan los componentes comunes para mi app), Pages (donde estan todas las páginas de mi app) y luego el Navbar y Footer:

### Componentes anidados

- Common
    -
    -Button
    -
    -Form
    -ItemCount
    -Loading
    -Modal
    
- Pages
    -
    -CartContainer
    -
    -CartFinished
    -Error
    -ItemDetailContainer
    -ItemListContainer
    -OrdersContainer
    -Registration
- NavBar
    -
    -CartWidget
    -Categories
- CartContainer
    -
- Footer
    -

Las Categories se exportan desde firebase a un array de objetos con cada categoria con su link, que luego uso para mapearlas un mi NavBar.


### Componentes usados a lo largo del proyecto

- Button
    -
- ItemCount
    -
- Loading
    -
- Error
    -
- Form
    -

## Services

Dentro de Services se encuentra la carpeta firebase donde esta el archivo index.js. En él esta la configuracion de firebase, inicialización y todas las function utilizadas para llevar adelante la App

## Navegabilidad

Cada ruta fue por requerimiento y buscan ser explícitas para brindar una buena UX.
Se basa en 3 páginas antes mencionadas, cada una con sus parametros de filtro, se puede pasar de una a otra sin tener que recargar.
El Home muestra el catalogo completo de productos, en el cual luego se puede filtrar por categorias desde el Navbar.
Detail muestra los detalles del producto seleccionado con la posibilidad de agregar tal producto al carrito, e ir hacia su página. De mostrar un error en la Url del producto se mostrara una pantalla de Error con la opción de dirigirse a otros productos del catalogo.
Por último esta el Cart donde se accede desde la card del producto o desde el Navbar, una vez que se haya agregado algun producto al carrito, desde esta página se accesede al Formulario para cargar datos y poder realizar la compra. Una vez finalizada la compra, en pantalla se mostrara que se ha realizado con éxito y en ella un boton para poder volver al Home

![image](https://github.com/Maxi-Coronel/ecommerce-coronel/blob/main/Navegation.gif)

## Imágenes y estilos

Todas las url son tomadas del sitio web de la empresa 'https://tiendaliving.com.ar/'

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
    -
- firebase

# Introducción a Create React App

Este proyecto fue arrancado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Para ejecutar el proyecto se deben utilizar los siguientes comandos:

### `npm start`
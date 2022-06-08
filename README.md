# E-comerce Frontera Living

El proyecto aun esta un desarrollo, pero la idea es poder finalizarlo con una tienda online de los productos de la empresa Frontera Living.

## Components

Los componentes estan separados en las carpetas Common (donde estan los componentes comunes para mi app), Pages (donde estan todas las páginas de mi app), luego el Navbar y Footer:

#### Common

| Button    |
| :-------- |

| Form       |
| :--------- |
| FormCreate |
| FormRecover|
| FormSesion |

| ItemCount |
| :-------- |

| Loading   |
| :-------- |

| Modal     |
| :-------- |
    
#### Pages

| CartContainer|
| :----------- |
| Cart         |
| CartVoid     |

| CartFinished |
| :----------- |

| Error     |
| :-------- |

| ItemDetailContainer   |
| :-------- |
| ItemDetail         |

| ItemListContainer|      |
| :--------------- | :--- |
| ItemList         | Item |

| OrdersContainer   |
| :-------- |
| Order         |

| Registration   |
| :-------- |

#### Navbar

| Categories |
| :----------- |

| Widget |
| :----------- |

#### Footer

Las Categories se exportan desde firebase a un array de objetos con cada categoria con su link, que luego uso para mapearlas un mi NavBar.


## Context

- CartContext
    -
Archivo que maneja el Carrito de la app

- UserContext
    -
Archivo que maneja el usuario al iniciar sesión

## Services

Dentro de Services se encuentra la carpeta firebase donde esta el archivo index.js. En él esta la configuracion de firebase, inicialización y todas las function utilizadas para llevar adelante la App

## Navegabilidad

Cada ruta fue por requerimiento y buscan ser explícitas para brindar una buena UX.
Se basa en 7 páginas antes mencionadas, cada una con sus parametros, se puede pasar de una a otra sin tener que recargar la app.
Home muestra el catalogo completo de productos, en el cual luego se puede filtrar por categorias desde el Navbar.
Detail muestra los detalles del producto seleccionado con la posibilidad de agregar tal producto al carrito, e ir hacia su página. De mostrar un error en la Url del producto se mostrara una página de Error con la opción de dirigirse a otros productos del catalogo.
Registration, una de las pantallas más importantes de la app, donde se podra crear una nueva cuenta o iniciar sesión si ya se cuenta con una.
Cart donde se accede desde la card del producto o desde el Navbar, una vez que se haya agregado algun producto al carrito.
Una vez finalizada la compra, se mostrara CartFinished haciendo saber que se ha realizado con éxito y en ella dos botones, uno para poder volver al Home y otro para ver una nueva página donde se muestra el listado de órdenes realizadas por el usuario, ordenadas desde la mas reciente

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
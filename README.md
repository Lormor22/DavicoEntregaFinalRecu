#Proyecto Final React Davico

##Descripción del Proyecto

Este proyecto es el resultado de la elaboración de un e-commerce desarrollado para el curso de Front-End. de [Coderhouse](https://www.coderhouse.com/ "Coderhouse").
Basándome en los ejemplos que nos dieron a lo largo de la cursada, decidí enfocarme en la temática de una tienda de libros, los cuales pueden ser separados por categorías, entre libros e historietas. El mismo cuenta con una base de datos alojada en Firestore, la cual almacena la información de cada libro, precio y stock.

En la app, vamos a poder realizar la compra de uno o varios libros, los cuales, al terminar la compra, se descontarán del stock. Otra característica básica pero presente es la acumulación de precio en el carrito, que muestra el precio por unidad, el precio de todo un ítem y el precio total de todos los productos comprados. Al finalizar la compra y ocurrir el descuento del stock, nos mostrará una simulación de factura/ticket, la cual tendrá los datos de a quién se enviarán los productos y el precio (todos estos datos se almacenan en Firestore como una "compra nueva").

Además otro elemento agregado es la restricción dependiendo de cómo uno uno interactúe o responda en la página. Un ejemplo sería que si no hay stock de un libro, el botón de comprar se bloqueará, pero se mostrará el producto para saber de su existencia. Otra característica es que si no tenemos ningún producto en el carrito, no nos dejará acceder a él, obligándonos a seleccionar por lo menos un producto para continuar.

Por último, al seleccionar la información de un producto en específico, se simulará un retraso en la carga del producto. De esta manera, se puede apreciar el cartel de "Cargando..." y confirmar que está implementado.

##Tecnologias
- Vite
- Node
- React Js Vanilla
- React Router Dom
- Fontawesome
- React-Toastify
- FireBase

##Instalación
-  git clone "https://github.com/Lormor22/DavicoEntregaFinalRecu"
- npm install 
- npm run dev




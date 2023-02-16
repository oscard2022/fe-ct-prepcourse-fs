/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   //opcion 1
   //var newobject = {nombre:nombre, edad:edad};
   //newobject.meow = function(){
   //   return "Meow!"
   //};
   //return newobject
   //opcion 2
   let objeto = {};
   objeto.nombre = nombre;
   objeto.edad = edad;
   objeto.meow = function(){return "Meow!" }
   
   return objeto

}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
  // const usuario = {nombre: nombre, email: email, password: password};
   //return usuario
   let objet2={};
   objet2["nombre"]= nombre;
   objet2["email"]= email;
   objet2["password"]=password;
   return objet2

}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null; //no conocemos el nombre de la propiedad, entonces se usa el nombre propiedad como una variable para recibir lo que va a venir
   return objeto             //si se usaran "" seria si conocemos el nombre de la propiedad.


}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();  // el objeto, luego metodo como no conocemos el nombre de la propiedad, lo invocamos con braket notation y la invocamos con parentesis

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:

   let object = {};
   object = objetoMisterioso.numeroMisterioso *5
   return object

// let object = objetoMisterioso.numeroMisterioso *5
// return object
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   //esto seria lo mismo que decir objetousuario.email != null || != undifined
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email){  
      return true 
   }
   else {
      return false
   }
}

function tienePropiedad(objeto, propiedad) {
   //  me pasan objeto y el nombre de la propiedad por eso va sin comillas 
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objeto.hasOwnProperty(propiedad)){
      return true
   }
   else {
      return false
   }
}

function verificarPassword(objetoUsuario, password) {
   //                       objeto {....}  "123456"
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password){
      return true
   }
   else {
      return false
   }

}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;

// objetoUsuario["password"] = nuevaPassword

}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   // objetoUsuario: {amigos: []}
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;

}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // objetoMuchosUsuarios.forEach(usuario => {
   //    usuario.esPremium = true
   //  });
   //return objetoMuchosUsuarios
   for (const usuario of objetoMuchosUsuarios) {
      usuario.esPremium = true
   }
   return objetoMuchosUsuarios
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   // objetoUsuario: { post:[{like1: 20}, {like2: 30}, {like2: 40}]}
   
   var contador = 0
   for (const posts of objetoUsuario.posts) {
      contador = contador + posts.likes;
      
   }
   //objetoUsuario.posts.forEach(posts=> {
   //   contador = contador + posts.likes
   //});
   return contador
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function (){
      var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento
      objetoProducto["Precio final"] = objetoProducto.precio - descuento
      return objetoProducto["Precio final"]
   }
   return objetoProducto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};

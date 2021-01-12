// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".

// En la primera lista tendréis que hacer lo siguiente:

//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.

//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:

//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");
  
  addClass();
}

function addClass() {
  const getElement = document.getElementsByClassName('selected');
  
  var selected = getElement[0];
  selected.className = 'element-3';
  console.log(selected)

  var liElement = selected.parentNode;
  console.log('li: ' , liElement); 
  
  var ulElement = liElement.parentNode;
  console.log('ul: ' , ulElement); 

  var first = ulElement.firstElementChild;
  first.firstElementChild.classList.add('element-1')
  console.log('first li: ' , first);
  
  var last = ulElement.lastElementChild;
  last.firstElementChild.classList.add('element-5')
  console.log('last li: ' , last);
  
  var next = liElement.nextElementSibling;
  next.firstElementChild.classList.add('element-4')
  console.log('next li: ' , next);
  
  var previous = liElement.previousElementSibling;
  previous.firstElementChild.classList.add('element-2')
  console.log('previous li: ' , previous);

  const allLiElement = document.querySelectorAll('li');
  
  for (var key in allLiElement) {
    if(typeof(allLiElement[key]) == 'object') {
      
      let iterator = parseInt(key) + 1;
      
      if (iterator%2 === 0){
        allLiElement[key].remove();
      }
    }
  }
  // console.log(allLiElement)

}
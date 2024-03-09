// Vanilla de js 🍦

// Recuperacion del boton

/* const buttons = document.querySelector('button')

buttons.forEach(button => {

  // Al hacer click, se ejecuta una funcion
button.addEventListener('click', function(){
  // Recuperar el id del atributo de HTML 
  
  const id = button.getAttribute('data-id')
  
  //llamar a un servicio para actualizar si me gusta 
  // togglelike(id)
  
  
  
  if (button.classList.contains('liked')) {
    button.classList.remove('liked');
    button.innerText = 'Me gusta'
    
  } else {
    button.classList.remove('liked');
    button.innerText = 'Quitar me gusta'
  }
  })
  
}); */

// const buttons = document.querySelectorAll('button')

/* buttons.forEach(button => {

  button.addEventListener('click', function () {
    
    const id = button.getAttribute('data-id')

    if (button.classList.contains('liked')) {
      button.classList.remove('liked')
      button.innerText = 'Me gusta'
      
    } else {
      button.classList.remove('liked')
      button.innerText = 'Quitar me gusta'
      
    }
  })
  
}); */

// Importacion de react 
import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client"

// declaracion de variable 
const appDomElement = document.getElementById('app')

// declaracion de variable root 

const root = ReactDom.createRoot(appDomElement)
const button = React.createElement('button', null, 'Me gusta')

root.render(button)



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

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {

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
  
});
window.addEventListener('load',function() {

  // Versión 0.0.1
  var form = document.getElementById('form');
  var tarjeta = document.getElementById('tarjeta');
  var botonGuardar = document.getElementById('botonGuardar');
  var inputInicio = document.getElementById('inputInicio');
  var firstInput = document.getElementById('firstInput');
  var container = document.getElementById('container');

  form.style.cssText = 'display:inline-block;';
  tarjeta.style.display = 'none';
  botonGuardar.classList.add('buttonStyle');


  inputInicio.addEventListener('click',hiddenTarjeta);
  botonGuardar.addEventListener('click',showTarjeta);
  botonGuardar.addEventListener('click',rightTarjeta);

  //Función para olcultar tarjetas
  function hiddenTarjeta(event) {
    inputInicio.style.display = 'none';
    tarjeta.style.cssText = 'display:block;';
  }

  // Versión 0.0.2
  //Función para mostrar tarjeta nueva
  function showTarjeta() {
    var newtarjeta = document.createElement('div');
    var tituloInput = document.createElement('input');
    var añadirTarea = document.createElement('input');
    añadirTarea.setAttribute('placeholder','añadir tarea');

    newtarjeta.classList.add('newList');
    tituloInput.classList.add('titleNewList');
    añadirTarea.classList.add('addTask');

    tituloInput.value =firstInput.value;

    newtarjeta.appendChild(tituloInput);
    newtarjeta.appendChild(añadirTarea);
    container.removeChild(container.firstElementChild);
    container.appendChild(newtarjeta);

    añadirTarea.addEventListener('focus',highligth);
    añadirTarea.addEventListener('click',showTarjetaList);

    // Función focus sobre añadir tarea
    function highligth(event) {
      this.style.backgroundColor = 'gray';
    }

    // Versión 0.0.3
    // Función para mostrar la lista de tareas
    function showTarjetaList() {
      var textarea = document.createElement('textarea');
      var botonAñadir = document.createElement('input');
      botonAñadir.setAttribute('type','button');
      botonAñadir.setAttribute('value','añadir');
      botonAñadir.classList.add('buttonStyle');

      textarea.classList.add('newTask');
      newtarjeta.appendChild(textarea);
      newtarjeta.appendChild(botonAñadir);
      añadirTarea.style.display = 'none';

      botonAñadir.addEventListener('click',agregaTarea);

      // Versión 0.0.4
      // Función para agregar tarea a la lista
      function agregaTarea() {

        if (textarea.value) {
          var newTarea = document.createElement('p');
          newTarea.classList.add('taskSaved');
          newTarea.textContent= textarea.value;

          //Versión 0.0.5
          newtarjeta.insertBefore(newTarea,botonAñadir);
          newtarjeta.insertBefore(textarea,botonAñadir);

          textarea.value = '';
        }
      }
    }
  }

  // Función para las nuevas tarjetas
  function rightTarjeta() {
    var newtarjeta = document.createElement('div');
    var tituloInput = document.createElement('input');
    var añadirTarea = document.createElement('input');
    añadirTarea.setAttribute('type','button');
    añadirTarea.setAttribute('value','guardar');

    newtarjeta.classList.add('tarjeta');
    tituloInput.setAttribute('placeholder','Añadir titulo de lista');
    tituloInput.classList.add('addTitle');
    añadirTarea.classList.add('buttonStyle');

    newtarjeta.appendChild(tituloInput);
    newtarjeta.appendChild(añadirTarea);

    container.appendChild(newtarjeta);
  }

})

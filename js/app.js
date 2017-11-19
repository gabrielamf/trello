window.addEventListener('load',function() {

  var form = document.getElementById('form');
  form.style.display = 'inline-block';
  var tarjeta = document.getElementById('tarjeta');
  tarjeta.style.display = 'none';

  var botonGuardar = document.getElementById('botonGuardar');

  var inputInicio = document.getElementById('inputInicio');
  var firstInput = document.getElementById('firstInput');

  var container = document.getElementById('container');

  inputInicio.addEventListener('click',hiddenTarjeta);

  function hiddenTarjeta(event) {
    inputInicio.style.display = 'none';
    tarjeta.style.display = 'block';
  }

  botonGuardar.addEventListener('click',showTarjeta);

  function showTarjeta() {
    var newtarjeta = document.createElement('div');
    var tituloInput = document.createElement('input');
    tituloInput.value =firstInput.value;
    tituloInput.style.display = 'block';
    var añadirTarea = document.createElement('input');
    añadirTarea.setAttribute('value','añadir tarea');


    newtarjeta.appendChild(tituloInput);
    newtarjeta.appendChild(añadirTarea);

    container.removeChild(container.firstElementChild);
    container.appendChild(newtarjeta);

    añadirTarea.addEventListener('click',showTarjetaList)

    function showTarjetaList() {
      var textarea = document.createElement('textarea');
      var botonAñadir = document.createElement('input');
      botonAñadir.setAttribute('type','button');
      botonAñadir.setAttribute('value','añadir');
      newtarjeta.appendChild(textarea);
      newtarjeta.appendChild(botonAñadir);
      añadirTarea.style.display = 'none';

      botonAñadir.addEventListener('click',agregaTarea)

      function agregaTarea() {
        var newTarea = document.createElement('p');
        newTarea.textContent= textarea.value;

        newtarjeta.style.display = 'block';
        newtarjeta.insertBefore(newTarea,botonAñadir);

        textarea.style.display = 'none';

      }

      botonAñadir.addEventListener('click',agregaTarea);
    }


  }















  /*var input = document.getElementById('firstInput');
  var container = document.getElementById('container');

  input.addEventListener('click',showForm);

  function showForm (event) {


    var boton = document.createElement('input');
    boton.setAttribute('type','button');
    boton.setAttribute('value','guardar');
    boton.classList.add('buttonGuardar');
    input.style.display = 'block';

    form.appendChild(boton);

    boton.addEventListener('click',showList);

    function showList(event) {
      var segundoInput = document.createElement('input');
      segundoInput.value = input.value;
      segundoInput.style.display = 'block'
      form.insertBefore(segundoInput,input);

      input.value = '';   !!!!
      input.removeEventListener('click',showForm);

      var derechaInput = document.createElement('div');
      derechaInput.style.display = 'inline-block'
      container.appendChild(derechaInput);

      var divInput = document.createElement('input');
      var boton = document.createElement('input');
      boton.setAttribute('type','button');
      boton.setAttribute('value','guardar');
      boton.classList.add('buttonGuardar');
      input.style.display = 'block';

      derechaInput.appendChild(divInput);
      derechaInput.appendChild(boton);

      boton.addEventListener('click',showForm);



    }



  }








  /*function  showText() {


  if(area.value) {
    var li = document.createElement('li');

    li.textContent = addTime() + area.value;
    lista.appendChild(li);

    area.value = '';
  }
  document.getElementById('restante').textContent = '140';
}*/











})

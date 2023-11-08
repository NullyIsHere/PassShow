const promptPassword = prompt("Password to show: (Initially it will be kept secret)")
const promptExam = prompt("Exam to do: (It will NOT be kept secret!)")
const passwordElement = document.getElementById('password')
const ExamElement = document.getElementById('examtodo')
ExamElement.innerHTML = "Today's Exam: " + promptExam

function queueAuthorization() {
  // Abre una nueva ventana en blanco (una pestaña en blanco)
  var newWindow = window.open('', '_blank', 'width=400,height=400');

  // Crea el contenido del pop-up en la nueva ventana
  var popupContent = `
  <link rel="icon" type="image/x-icon" href="https://passshow.nullyih.repl.co/favicon.ico">
  <center>
    <div class="overlay" id="overlay"></div>
    <div class="popup" id="popup">
      <div class="popup-content">
        <h2>Authorization required</h2>
        <p>Are you sure you want to authorize this action?</p>
        <button class="popup-button button" id="authorizeButton"><span class="button-content">Authorize</span></button>
        <p class="canceltext">To cancel this action just close the tab</p>
        <!-- Agrega aquí el contenido adicional que desees mostrar en el pop-up -->
      </div>
    </div>
    <link rel="stylesheet" href="https://passshow.nullyih.repl.co/popup.css">
    </center>
  `;

  // Agrega el contenido del pop-up al cuerpo de la nueva ventana
  newWindow.document.body.innerHTML = popupContent;

  // Cierra la nueva ventana cuando se hace clic en el fondo oscuro
  var overlay = newWindow.document.getElementById('overlay');
  overlay.addEventListener("click", function() {
    newWindow.close();
  });

  // Ejecuta la función "show" cuando se hace clic en el botón "Autorizar"
  var authorizeButton = newWindow.document.getElementById('authorizeButton');
  authorizeButton.addEventListener("click", function() {
    newWindow.close();
    show();
  });
}

function show() {

    passwordElement.innerHTML = promptPassword
}

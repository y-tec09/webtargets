// Obtener elementos
var modal = document.getElementById("qrModal");
var img = document.querySelector(".qr-code");
var modalImg = document.getElementById("qrImage");

// Al hacer clic en el QR, abrir modal
img.onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
}
// Al hacer clic fuera de la imagen, cerrar modal
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


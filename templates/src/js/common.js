window.addEventListener("resize", fixBodyHeight);
window.addEventListener("DOMContentLoaded", fixBodyHeight);

function fixBodyHeight() {
  this.document.body.style.height = this.window.innerHeight + "px";
}
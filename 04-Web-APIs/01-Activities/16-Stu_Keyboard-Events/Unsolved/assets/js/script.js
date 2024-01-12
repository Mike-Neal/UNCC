function keydownAction(event) {
  // TODO: Complete keydown function}
document.querySelector("#status").textContent = "KEYdown Event";
}
function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

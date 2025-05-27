function openEnvelope() {
  const flap = document.querySelector(".flap");
  const letter = document.querySelector(".letter");
  const message = document.getElementById("message");

  flap.style.transform = "rotateX(-180deg)";
  letter.style.opacity = 1;
  letter.style.transform = "translateY(0)";

  setTimeout(() => {
    message.classList.remove("hidden");
  }, 1300);
}
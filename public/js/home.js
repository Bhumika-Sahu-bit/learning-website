document.addEventListener("mousemove", (event) => {
  const image = document.querySelector(".rotating-image");
  const { clientX: mouseX, clientY: mouseY } = event;
  const { innerWidth: width, innerHeight: height } = window;

  const xRotation = ((mouseY / height) * 2 - 1) * 15; // 15 degrees max rotation
  const yRotation = ((mouseX / width) * 2 - 1) * -15; // -15 degrees max rotation

  image.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

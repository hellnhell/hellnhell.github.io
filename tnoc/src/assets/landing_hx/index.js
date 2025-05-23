document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const createCircle = (x, y, size) => {
    const circle = document.createElement("span");
		circle.classList.add("circle"); 
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    container.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 3000);
  };

  document.addEventListener("mousemove", (e) => {
    const size = Math.random() * 20 + 10;
    createCircle(e.clientX, e.clientY, size);
  });

  let touchMoveTimeout;
  document.addEventListener("touchstart", () => {
    document.addEventListener("touchmove", (e) => {
      if (touchMoveTimeout) return;
      touchMoveTimeout = setTimeout(() => {
        const size = Math.random() * 50 + 20;
        createCircle(e.touches[0].clientX, e.touches[0].clientY, size);
        touchMoveTimeout = null;
      }, 50);
    });
  });
});

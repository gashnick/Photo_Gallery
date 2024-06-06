document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-images img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const src = image.getAttribute("src");
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `<img src="${src}" alt="Image">`;

      document.body.appendChild(modal);

      modal.addEventListener("click", () => {
        modal.remove();
      });
    });
  });
});

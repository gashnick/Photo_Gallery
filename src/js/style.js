document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const description = item.querySelector(".description");
      const h2 = description.querySelector("h2");
      const p = description.querySelector("p");
      h2.style.transform = "translateY(-14px)";
      h2.style.opacity = "1";
      p.style.transform = "translateY(-14px)";
      p.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
      const description = item.querySelector(".description");
      const h2 = description.querySelector("h2");
      const p = description.querySelector("p");
      h2.style.transform = "translateY(0)";
      h2.style.opacity = "0";
      p.style.transform = "translateY(0)";
      p.style.opacity = "0";
    });
  });
});

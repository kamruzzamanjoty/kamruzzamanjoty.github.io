document.querySelectorAll("[data-photo-gallery]").forEach((gallery) => {
  const slides = [...gallery.querySelectorAll("figure")];
  const controls = gallery.querySelector("[data-gallery-controls]");
  if (!controls || slides.length < 2) return;
  const previous = controls.querySelector("[data-previous]");
  const next = controls.querySelector("[data-next]");
  const status = controls.querySelector("[data-gallery-status]");
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    status.textContent = `Photo ${current + 1} of ${slides.length}`;
  }
  previous.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));
  show(0);
  controls.hidden = false;
});

document.querySelectorAll(".career-question-holder").forEach((h) => {
  h.addEventListener("click", () => {
    const i = h.parentElement;
    const a = i.classList.contains("active");
    document
      .querySelectorAll(".career__accordion__item")
      .forEach((x) => x.classList.remove("active"));
    if (!a) i.classList.add("active");
  });
});
document.querySelectorAll(".tab-link").forEach((l) => {
  l.addEventListener("click", (e) => {
    e.preventDefault();
    const t = l.getAttribute("href");
    const p = l.closest(".career__accordion__content");
    p.querySelectorAll(".tab-link").forEach((x) =>
      x.classList.remove("active")
    );
    l.classList.add("active");
    p.querySelectorAll(".career-tab-content").forEach((c) => {
      c.style.display = "none";
      if ("#" + c.id === t) c.style.display = "block";
    });
  });
});

document.querySelectorAll(".career-sec-accordion-opener").forEach((o) => {
  o.addEventListener("click", (e) => {
    e.preventDefault();
    const isActive = o.classList.contains("active");
    // Optional: close other mobile sub-accordions in the same group
    const parent = o.closest(".tabs-content-career");
    if (parent) {
      parent.querySelectorAll(".career-sec-accordion-opener").forEach((x) => {
        x.classList.remove("active");
      });
    }
    if (!isActive) o.classList.add("active");
  });
});

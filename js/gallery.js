/* =======================================
   SUPER FAST GALLERY (Final Version)
======================================= */

const galleryGrid = document.getElementById("galleryGrid");
const galleryLoader = document.getElementById("galleryLoader");

/* LOAD ALL IMAGE DATA */
const galleryData = [
  /* your full image list here… EXACTLY the same as you pasted */
];

/* CONFIG */
const BATCH_SIZE = 20;
let currentIndex = 0;
let activeCategory = "all";
let filteredData = [...galleryData];
let loading = false;

/* RENDER BATCH */
function renderBatch() {
  if (loading) return;
  if (currentIndex >= filteredData.length) {
    galleryLoader.style.display = "none";
    return;
  }

  loading = true;
  galleryLoader.style.display = "block";

  setTimeout(() => {
    let slice = filteredData.slice(currentIndex, currentIndex + BATCH_SIZE);

    slice.forEach(item => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.dataset.category = item.category;

      div.innerHTML = `
        <img class="gallery-img lazy-img" 
             data-src="${item.src}" 
             alt="${item.alt}">
      `;

      galleryGrid.appendChild(div);
    });

    lazyLoadImages();
    attachLightbox();

    currentIndex += BATCH_SIZE;
    galleryLoader.style.display = "none";
    loading = false;

  }, 250);
}

/* FILTERING */
function applyFilter(category) {
  activeCategory = category;
  currentIndex = 0;
  galleryGrid.innerHTML = "";

  filteredData = category === "all"
    ? [...galleryData]
    : galleryData.filter(i => i.category === category);

  renderBatch();
}

/* LAZY LOADING */
function lazyLoadImages() {
  const imgs = document.querySelectorAll(".lazy-img:not(.loaded)");

  const obs = new IntersectionObserver((entries, ob) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        ob.unobserve(img);
      }
    });
  }, { rootMargin: "300px" });

  imgs.forEach(img => obs.observe(img));
}

/* SCROLL AUTO LOAD */
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
    renderBatch();
  }
});

/* FILTER BUTTONS */
document.querySelectorAll(".gallery-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".gallery-filters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    applyFilter(btn.dataset.filter);
  });
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
let galleryImages = [];

function attachLightbox() {
  galleryImages = [...document.querySelectorAll(".gallery-img")];

  galleryImages.forEach((img, index) => {
    img.dataset.index = index;
    img.onclick = () => openLightbox(index);
  });
}

function openLightbox(index) {
  lightbox.classList.add("active");
  updateLightbox(index);
}

function updateLightbox(index) {
  lbImg.src = galleryImages[index].dataset.src || galleryImages[index].src;
  lbImg.dataset.index = index;
}

document.querySelector(".lightbox-close").onclick = () =>
  lightbox.classList.remove("active");

document.querySelector(".lightbox-arrow.right").onclick = () => {
  let index = Number(lbImg.dataset.index);
  index = (index + 1) % galleryImages.length;
  updateLightbox(index);
};

document.querySelector(".lightbox-arrow.left").onclick = () => {
  let index = Number(lbImg.dataset.index);
  index = (index - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox(index);
};

/* INITIAL LOAD */
applyFilter("all");

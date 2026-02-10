AOS.init({
  duration:900,
  easing:'ease-out-cubic',
  once:true,
  offset:120
});

/* NAV SCROLL */
window.addEventListener('scroll',()=>{
  document.getElementById('nav')
    ?.classList.toggle('scrolled',window.scrollY>100);
});

/* REVEAL SECTIONS */
document.querySelectorAll('.reveal').forEach(sec=>{
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('active');
    });
  },{threshold:.2});
  obs.observe(sec);
});

/* CARD STAGGER */
document.querySelectorAll('.card').forEach((card,i)=>{
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>card.classList.add('visible'),i*120);
      }
    });
  },{threshold:.3});
  obs.observe(card);
});

/* HOME SLIDER (only if exists) */
/* HOME SLIDER (FIXED) */
const slideImg = document.getElementById("slideImage");

if(slideImg){

  const slides = [
    {
      image:"assets/hero/living.webp",
      category:"LIVING ROOM",
      heading:"Living Room Interiors",
      desc:"Warm textures and elegant finishes<br>crafted for modern living spaces."
    },
    {
      image:"assets/hero/kitchen.webp",
      category:"KITCHEN",
      heading:"Kitchen Interiors",
      desc:"Durable, stylish surfaces<br>designed for everyday performance."
    },
    {
      image:"assets/hero/bedroom.webp",
      category:"BEDROOM",
      heading:"Bedroom Interiors",
      desc:"Calm tones and premium finishes<br>crafted for restful living."
    },
    {
      image:"assets/hero/office.webp",
      category:"OFFICE",
      heading:"Office Interiors",
      desc:"Professional designs that balance<br>productivity and aesthetics."
    }
  ];

  let index = 0;

  const cat = document.getElementById("slideCategory");
  const head = document.getElementById("slideHeading");
  const desc = document.getElementById("slideDesc");

  setInterval(() => {

    slideImg.classList.remove("active");

    setTimeout(() => {
      index = (index + 1) % slides.length;
      slideImg.src = slides[index].image;
      slideImg.classList.add("active");

      /* Update text ONLY on desktop */
      if(window.innerWidth > 900){
        cat.textContent = slides[index].category;
        head.textContent = slides[index].heading;
        desc.innerHTML = slides[index].desc;
      }

    }, 500);

  }, 5000);
}


/* KEBAB MENU TOGGLE */
const kebab = document.getElementById("kebab");
const navLinks = document.querySelector(".nav-links");

kebab.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* Close menu on link click */
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.classList.remove("open");
  });
});
document.addEventListener("click", (e)=>{
  if(!navLinks.contains(e.target) && !kebab.contains(e.target)){
    navLinks.classList.remove("open");
  }
});

/* ================= GALLERY DATA ================= */
const galleryData = [
  { src: "assets/gallery/livingroom/l1.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l2.webp", category: "living", alt: "living room Design" },
  { src: "assets/gallery/livingroom/l3.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l4.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l5.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l6.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l7.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l8.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l9.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l10.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l11.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l12.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l13.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l14.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l15.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l16.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l17.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l18.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l19.webp", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/office/o1.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o2.webp", category: "office", alt: "Corporate Office" },
  { src: "assets/gallery/office/o3.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o4.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o5.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o6.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o7.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o8.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o9.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o10.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o11.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o12.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o13.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o14.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o15.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o16.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o17.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o18.webp", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/bedroom/bd1.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd2.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd3.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd4.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd5.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd6.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd7.webp", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/kichen/k1.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k2.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k3.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k4.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k5.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k6.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k7.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k8.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k9.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k10.webp", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/poojaroom/pr1.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr2.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr3.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr4.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr5.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr6.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr7.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr8.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr9.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr10.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr11.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr12.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr13.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr14.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr15.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr16.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr17.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr18.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr19.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr20.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr21.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr22.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr23.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr24.webp", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/bathroom/b1.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b2.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b3.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b4.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b5.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b6.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b7.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b8.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b9.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b10.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b11.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b12.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b13.webp", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/artisticlaminates/al1.webp", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/artisticlaminates/al2.webp", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/artisticlaminates/al3.webp", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/designerfurniture/df1.webp", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df2.webp", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df3.webp", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df4.webp", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df5.webp", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/dining/d1.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d2.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d3.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d4.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d5.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d6.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d7.webp", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/interialdesign/id1.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id2.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id3.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id4.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id5.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id6.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id7.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id8.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id9.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id10.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id11.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id12.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id13.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id14.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id15.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id16.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id17.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id18.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id19.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id20.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id21.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id22.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id23.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id24.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id25.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id26.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id27.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id28.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id29.webp", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interiorsfurnishings/if1.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if2.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if3.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if4.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if5.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if6.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if7.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if8.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if9.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if10.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if11.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if12.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if13.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if14.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if15.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if16.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if17.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if18.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if19.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if20.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if21.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if22.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if23.webp", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/kidsroom/kd1.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd2.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd3.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd4.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd5.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd6.webp", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/studyroom/s1.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s2.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s3.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s4.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s5.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s6.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s7.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s8.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s9.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s10.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s11.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s12.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s13.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s14.webp", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/wardrobe/w1.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w2.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w3.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w4.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w5.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w6.webp", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wooddoors/door1.webp", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door2.webp", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door3.webp", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door4.webp", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door5.webp", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door6.webp", category: "Doors", alt: "Doors" },
];

/* ================= RENDER GALLERY ================= */
/* ============================================
   SUPER FAST GALLERY SYSTEM (VERSION 2.1)
   Auto-Load + Category Loading + Scroll Throttle
============================================ */

const galleryGrid = document.getElementById("galleryGrid");
const galleryLoader = document.getElementById("galleryLoader");

if (galleryGrid) {

  /* CONFIG */
  const BATCH_SIZE = 20;
  let currentIndex = 0;
  let activeCategory = "all";
  let filteredData = [...galleryData];
  let loading = false; // to prevent double-calls


  /* RENDER BATCH */
  function renderBatch() {
  if (loading) return;
  loading = true;
if (currentIndex >= filteredData.length) {
  galleryLoader.style.display = "none";
  return;
}
  galleryLoader.style.display = "block"; // SHOW LOADER

  setTimeout(() => {
    const slice = filteredData.slice(currentIndex, currentIndex + BATCH_SIZE);

    slice.forEach((item) => {
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

    galleryLoader.style.display = "none"; // HIDE LOADER
    loading = false;

  }, 300); // small delay for visual effect
}



  /* APPLY FILTER */
  function applyFilter(category) {
    activeCategory = category;
    currentIndex = 0;

    galleryGrid.innerHTML = "";

    filteredData = 
      category === "all"
        ? [...galleryData]
        : galleryData.filter(item => item.category === category);

    renderBatch();
  }


  /* LAZY LOADER */
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
    }, { rootMargin: "200px" });

    imgs.forEach(img => obs.observe(img));
  }


  /* AUTO LOAD ON SCROLL (WITH THROTTLE) */
  let scrollTimer = null;

  window.addEventListener("scroll", () => {
    if (scrollTimer) return;

    scrollTimer = setTimeout(() => {
      if (
        window.innerHeight + window.scrollY >= 
        document.documentElement.scrollHeight - 200
      ) {
        renderBatch();
      }
      scrollTimer = null;
    }, 200);
  });


  /* CATEGORY BUTTONS */
  const filterButtons = document.querySelectorAll(".gallery-filters button");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });


  /* LIGHTBOX */
  
  const lightbox = document.getElementById("lightbox");
  let lbImg = document.getElementById("lightbox-img");
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


  /* LOAD DEFAULT */
  applyFilter("all");
}

/* PRELOADER */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) {
    setTimeout(() => {
      pre.classList.add("hide");
    }, 300);
  }
});

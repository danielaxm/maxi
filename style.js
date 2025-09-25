document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("closeBtn");

  console.log("JS carregado!"); // teste

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      console.log("Botão clicado!"); // teste
      mobileNav.classList.toggle("active");
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        console.log("Fechar clicado!"); // teste
        mobileNav.classList.remove("active");
      });
    }

    const links = mobileNav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  }
  
  const filterButtons = document.querySelectorAll(".tab-button");
  const catalogItems = document.querySelectorAll(".catalog-grid .item");
  const catalogoSection = document.querySelector(".catalogo");

  function filterCatalog(category) {
    catalogItems.forEach(item => {
      item.style.display = item.classList.contains(category) ? "block" : "none";
    });

    catalogoSection.classList.remove("dourado-ativo", "prata-ativo");
    catalogoSection.classList.add(category + "-ativo");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterCatalog(btn.dataset.filter);
    });
  });

filterCatalog("dourado");

filterCatalog("dourado");

  filterCatalog("dourado");

  
  const header = document.querySelector(".header");
  if (header) {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
  }

  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(carousel => {
    const imgs = carousel.querySelectorAll("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let current = 0;

    function showImage(index) {
      imgs.forEach(img => img.classList.remove("active"));
      imgs[index].classList.add("active");
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        current = (current - 1 + imgs.length) % imgs.length;
        showImage(current);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        current = (current + 1) % imgs.length;
        showImage(current);
      });
    }

    if (imgs.length === 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  });
});

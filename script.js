// const menuBtn = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

//   menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });

  const menuBtn  = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () =>{
    mobileMenu.classList.toggle("hidden");
  });



  const slider = document.getElementById("slider");
  let cards = Array.from(slider.children);
  const cardWidth = cards[0].offsetWidth + 24; // width + gap

  // Clone first & last
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, cards[0]);

  // Start from first real card
  slider.scrollLeft = cardWidth;

  function next() {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }

  function prev() {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }

  slider.addEventListener("scroll", () => {
    if (slider.scrollLeft <= 0) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = cardWidth * cards.length;
      slider.style.scrollBehavior = "smooth";
    }

    if (slider.scrollLeft >= cardWidth * (cards.length + 1)) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = cardWidth;
      slider.style.scrollBehavior = "smooth";
    }
  });

 VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x8150de, // purple
      backgroundColor: 0x000000, // black
      maxDistance: 14.0,
      spacing: 13.0,
      showDots: false,
    });
var navLinks = document.querySelectorAll(".navbar-nav a");

// Tambahkan event listener untuk setiap elemen anchor
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Hapus kelas 'active' dari semua elemen anchor
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Tambahkan kelas 'active' pada elemen anchor yang diklik
    this.classList.add("active");
  });
});

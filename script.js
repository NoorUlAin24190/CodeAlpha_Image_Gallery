// Selectors
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const overlays = document.querySelectorAll(".overlay");

const singleView = document.querySelector(".single-view");
const singleImg = document.getElementById("single-img");
const singleTitle = document.getElementById("single-title");
const singleDesc = document.getElementById("single-desc");
const backBtn = document.querySelector(".back-btn");

// Filters functionality
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    galleryItems.forEach((item) => {
      item.style.display =
        category === "all" || item.getAttribute("data-category") === category
          ? "block"
          : "none";
    });
  });
});

// View overlay click – shows single view
overlays.forEach((overlay, index) => {
  overlay.addEventListener("click", () => {
    const item = overlay.parentElement;
    const img = item.querySelector("img");
    const category = item.getAttribute("data-category");

    // Hide gallery section
    document.querySelector(".gallery-section").style.display = "none";

    // Show single view
    singleView.style.display = "block";
    singleImg.src = img.src;
    singleTitle.textContent = `${
      category.charAt(0).toUpperCase() + category.slice(1)
    } Image`;
    singleDesc.textContent = `This is a description for ${category} image ${
      index + 1
    }.`;
  });
});

// Back button
backBtn.addEventListener("click", () => {
  singleView.style.display = "none";
  document.querySelector(".gallery-section").style.display = "block";
});
 
const textAreas1 = document.querySelectorAll(
  ".text-area1"
);
const textAreas2 = document.querySelectorAll(
  ".text-area2"
);
const textAreas3 = document.querySelectorAll(
  ".text-area3"
);

// Create a scroll event listener
window.addEventListener("scroll", () => {
  // Calculate the opacity value based on the scroll position
  const scrollOpacity =
    window.scrollY /
    (document.documentElement.scrollHeight -
      window.innerHeight);

  // Apply the opacity value to text areas 1
  textAreas1.forEach((textArea) => {
    textArea.style.opacity =
      scrollOpacity.toFixed(1);
  });

  // Apply the opacity value to text areas 2
  textAreas2.forEach((textArea) => {
    textArea.style.opacity =
      scrollOpacity.toFixed(1);
  });

  // Apply the opacity value to text areas 3
  textAreas3.forEach((textArea) => {
    textArea.style.opacity =
      scrollOpacity.toFixed(1);
  });
});

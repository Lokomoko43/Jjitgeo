const rootElement = document.documentElement;
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function handleScroll() {
const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
if (rootElement.scrollTop / scrollTotal > 0.80) {
  scrollToTopBtn.classList.add("showBtn");
} else {
  scrollToTopBtn.classList.remove("showBtn");
}
}

document.addEventListener("scroll", handleScroll);

scrollToTopBtn.addEventListener("click", () => {
rootElement.scrollTo({
  top: 0,
  behavior: "smooth",
});
});
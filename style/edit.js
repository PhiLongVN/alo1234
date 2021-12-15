const icon = document.querySelector(".icon");
const bam = document.querySelector(".click");

icon.onclick = () => {
  bam.classList.toggle("active");
};

const listMenu = document.querySelector(".header-menuList");
const menuIconContainer = document.querySelector(".header-menuIconContainer");
const proyectSeccion = document.querySelector(".proyectSeccion-continer");

let infoArea = document.getElementById("info-area");
let skilsArea = document.getElementById("skils-area");

const showMovil = () => {
  listMenu.classList.toggle("inactive");
  let toggleIcon = listMenu.classList.contains("inactive");
  menuIconContainer.innerHTML = !toggleIcon ? cancelIcon : menuIcon;
};

function mostrarInfoMovil() {
  infoArea.classList.remove("invisible");
  skilsArea.classList.add("invisible");
}

function mostrarSkilsMovil() {
  infoArea.classList.add("invisible");
  skilsArea.classList.remove("invisible");
}

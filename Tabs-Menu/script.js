const menuItems = document.querySelectorAll(".menu-item");
const tabs = document.querySelectorAll(".tab");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    item.classList.add("active");
  });
});

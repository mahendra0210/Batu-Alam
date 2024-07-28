document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const shoppingCart = document.querySelector(".shopping-cart");
  const calculatorSidebar = document.querySelector("#calculator-sidebar");
  const calculatorButton = document.querySelector("#calculator-button");
  const hm = document.querySelector("#hamburger-menu");
  const sc = document.querySelector("#shopping-cart-button");

  feather.replace();

  // Toggle class active for hamburger menu
  hm.onclick = () => {
    navbarNav.classList.toggle("active");
    shoppingCart.classList.remove("active");
    calculatorSidebar.classList.remove("active");
  };

  // Toggle class active for shopping cart
  sc.onclick = () => {
    shoppingCart.classList.toggle("active");
    navbarNav.classList.remove("active");
    calculatorSidebar.classList.remove("active");
  };

  // Toggle class active for calculator sidebar
  calculatorButton.onclick = () => {
    calculatorSidebar.classList.toggle("active");
    navbarNav.classList.remove("active");
    shoppingCart.classList.remove("active");
  };

  document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove("active");
    }
    if (!calculatorButton.contains(e.target) && !calculatorSidebar.contains(e.target)) {
      calculatorSidebar.classList.remove("active");
    }
  });

  document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const lengthCm = parseFloat(document.getElementById('length').value);
    const widthCm = parseFloat(document.getElementById('width').value);
    const areaM2 = parseFloat(document.getElementById('area').value);
  
    const itemAreaCm2 = lengthCm * widthCm;
    const areaCm2 = areaM2 * 10000;
    const numberOfItems = areaCm2 / itemAreaCm2;
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Jumlah batu yang diperlukan: ${Math.ceil(numberOfItems)} pcs`;
  
    // Add class to show the result with transition
    resultDiv.classList.add('show');
  });
  
});

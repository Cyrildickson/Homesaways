const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})







//  <nav class="relative container mx-auto p-6">
// <!-- Flex container --
// <div class="flex items-center justify-between">
//   <!-- Logo --
//   <div class="pt-2">
//     <img src="images/Homesaway_logo_prime.png" class="w-64" />
//   </div>
//   <!-- Menu Items 
//   <div class="hidden space-x-6 md:flex">
//     <a href="index.html" class="nav_link active:text-red-300 font-bold hover:text-red-300">Home</a>
//     <a href="#footer" class="nav_link active:text-red-300 font-bold hover:text-red-300">About Us</a>
//     <a href="cars.html" class="nav_link active:text-red-300 font-bold hover:text-red-300">Our Vehichles</a>
//     <a href="houses.html" class="nav_link active:text-red-300 font-bold hover:text-red-300">Our Houses</a>
//     <a href="#" class="nav_link active:text-red-300 font-bold hover:text-red-300">Community</a>
//   </div>
//   <!-- Button 
//   <div class="hidden p-3 px-6 pt-2 text-black  rounded-sm baseline md:block">
//     <i class="fa-brands fa-whatsapp text-white text-2xl  rounded-full bg-green-700 "></i>
//     (+223) 59 4604 518
//   </div>

//  <!-- Hamburger Icon -
//   <button id="Menu-btn" class="block hamburger md:hidden focus:outline-none">
//     <span class="hamburger-top"></span>
//     <span class="hamburger-middle"></span>
//     <span class="hamburger-bottom"></span>
//   </button>
// </div>

// <!-- Mobile Menu -
// <div class="md:hidden">
//   <div id="menu" class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
//     <a href="index.html" class="nav_link active:text-red-300" >Home</a>
//     <a href="#footer">About Us</a>
//     <a href="gal.html">Our Vehichles</a>
//     <a href="#">Contact Us</a>
//     <a href="#">Community</a>
//   </div>
// </div>

// </nav> 
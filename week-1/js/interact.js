/*
Request 1: Click to Change Text.
When the user clicks on the "Welcome Message" block, change text to "Have a GoodTime!".
*/
const banner = document.querySelector(".banner");
const bannerText = banner.firstElementChild;

banner.addEventListener('click', () => {
	bannerText.textContent = "Hava a Good Time!";
});

/*
Request 2: Click to Show/Close Menu.
When the user clicks the menu at the top-right corner, show the hidden mobile menu. 
Afterthat, the user can click the close button to hide it.
*/
const menuBtn = document.querySelectorAll("img")[0];
const hiddenNav = document.querySelector(".hidden-nav");
const exitBtn = document.querySelectorAll("img")[1];

menuBtn.addEventListener('click', () => {
	hiddenNav.style.visibility = "visible";
});

exitBtn.addEventListener('click', () => {
	hiddenNav.style.visibility = "hidden";
});

/*
Request 3: Click to Show More Content Boxes.
There are some more content boxes waiting to show. 
When the user clicks the Call-to-Actionbutton, show those hidden content boxes.
*/
const showBtn = document.querySelector(".btn");
const hidden = document.querySelector(".hidden");

showBtn.addEventListener('click', () => {
	hidden.style.display = "block";
});


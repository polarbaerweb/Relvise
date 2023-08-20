export const burger = document.querySelector(".hamburger")
const header_navigation = document.querySelector(".header__navigation")


export function handleBurgerActivation(){
	burger.classList.toggle("close")
	header_navigation.classList.toggle("active")
}
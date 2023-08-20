const _ibg = document.querySelector("._ibg")
const image = document.querySelector("._ibg img")

function makeItBackground(){
	const path = image.getAttribute("src")
	_ibg.style.backgroundImage = `url(${path}) no-repeat`

}


export default makeItBackground
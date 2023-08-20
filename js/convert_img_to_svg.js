export function change_img_to_svg(){
	const img_container = document.querySelectorAll(".service__block_item")
	const icons =  document.querySelectorAll(".service__block-icon")

	img_container.forEach(async (element, index)=> {
		const path_to_svg_file = icons[index].getAttribute("src")
		const img_content = icons[index]
		const svg_tag = await getSvg(path_to_svg_file)
		element.replaceChild(svg_tag, img_content)
	})

}

async function getSvg(path){
	const svg = await fetch(path)
	const convert_to_string = await svg.text()

	const dom_parser = new DOMParser()
	const svg_element = dom_parser.parseFromString(convert_to_string, 'image/svg+xml').querySelector('svg')
	
	const script = svg_element.querySelector("script")
	svg_element.removeChild(script)

	const svg_path = svg_element.querySelector("g path")
	svg_path.removeAttribute("fill")

	return svg_element
}
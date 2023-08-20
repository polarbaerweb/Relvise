import makeItBackground from "./make_it_bg.js";
import {burger, handleBurgerActivation} from "./burger.js"
import { change_img_to_svg } from "./convert_img_to_svg.js";

makeItBackground()
change_img_to_svg()
burger.onclick = handleBurgerActivation
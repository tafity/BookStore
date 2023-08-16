import { onload } from "./books";
onload();
import "../dist/css/style.css";
import { autoPlay } from "./slider";
autoPlay();
import { menu} from "./menu";
menu();
import { lazyLoading } from "./lazyLoading";
lazyLoading();
import { sorting } from "./sorting";
sorting();
import { inCart, push, cartCount, displayCart } from "./cart"
inCart();
push();
cartCount();
displayCart();
console.log('hi')
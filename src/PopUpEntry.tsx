// Chrome cannot directly load .tsx files — it only loads static HTML. 
// Your TSX needs to be compiled to JS, and that JS included in the popup HTML.

import { createRoot } from "react-dom/client";
import { Popup } from "./PopUp";

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />);
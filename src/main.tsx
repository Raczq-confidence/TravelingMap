import { createRoot } from "react-dom/client";
import { App } from "./App";
import renderEventManager from "./render-event";
import CanvasMap from "../canvas-map";

renderEventManager.addListener(() => {
  CanvasMap({
    textContainer: document.querySelector(".text"),
    mapSrc: "images/china_map.svg",
    trailVisitedColor: "#47DBB4",
    fontPresentColor: "#5D5C56",
  }).appendTo(".map-container");
});

createRoot(document.getElementById("root")!).render(<App />);

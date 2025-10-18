import CanvasMap from "./canvas-map";

setTimeout(() => {
  let map = CanvasMap({
    textContainer: document.querySelector(".text"),
    mapSrc: "images/china_map.svg",
    trailVisitedColor: "#47DBB4",
    fontPresentColor: "#5D5C56",
  }).appendTo(".map-container");
}, 200);

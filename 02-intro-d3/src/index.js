import {select} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!

const body = select("body");
const svg = body.append("svg").attr("width", 400).attr("height", 400);

const createCircle = (cx, cy, r, n) => {
    for(let i = 1; i <=n; i++){
        svg.append("circle").attr("id", "circle_" + i).attr("cx", cx).attr("cy", cy).attr("r", r);
        cx+=100;
        cy+=100;
    }
}
createCircle(50, 50, 40, 3);

svg.select("#circle_2").attr("fill", "red").attr("cx", +svg.select("#circle_2").attr("cx") + 50);

svg.select("#circle_1").attr("cx", +svg.select("#circle_1").attr("cx") + 50);

for(let i = 1; i <= 3; i++){
  svg
    .append("text")
    .attr("x", +svg.select(`#circle_${i}`).attr("cx"))
    .attr("y", +svg.select(`#circle_${i}`).attr("cy") + 55)
    .attr("text-anchor", "middle")
    .text(`Mon texte sous le cercle ${i}`);
};

svg.select("#circle_3").on("click", () => {
    for(let i = 1; i <= 3; i++){
        svg.select(`#circle_${i}`).attr("cy", 50);
    }
})

const hauteursRectangles = [20, 5, 25, 8, 15];

const height = +svg.attr("height"); // Récupère la hauteur de la zone SVG

const rects = svg.selectAll("rect").data(hauteursRectangles);

const newRects = rects
  .enter()
  .append("rect")
  .attr("width", 20)
  .attr("fill", "steelblue"); // Ajoute une couleur de remplissage aux rectangles

const allRects = newRects.merge(rects);

allRects
  .attr("height", function (d) {
    return d;
  })
  .attr("y", function (d, i) {
    // Définit la position y des rectangles
    return height - d; // Soustrait la hauteur pour placer le rectangle en bas
  })
  .attr("x", function (d, i) {
    // Définit la position x des rectangles
    return i * 25; // Ajoute un espace de 5 pixels entre chaque rectangle
  });
const superHeroes = require("superheroes");
const superVillains = require("supervillains");

module.exports = (pathName, res) => {
  if (pathName === "/superheroes") {
    res.end(randomSuperHeroes());
  } else if (pathName === "/supervillains") {
    res.end(randomSuperVillains());
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end("Requested Resource Not Found");
  }
};

function randomSuperHeroes() {
  return superHeroes.random();
}

function randomSuperVillains() {
  return superVillains.random();
}

let favs = []; // no se declara como constante para poder modificarla

function postFav(req, res) {
  const { character } = req.body;

  favs.push(character);

  res.json(favs);
}

function deleteFav(req, res) {
  const { id } = req.params;

  favs = favs.filter(character => character.id !== parseInt(id));

  res.json(favs);
}

module.exports = { postFav, deleteFav };

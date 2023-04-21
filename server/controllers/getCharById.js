const axios = require("axios");

const PORT = 3001;

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {

  try {
  const { id } = req.params;
  const { data } = await axios.get(URL,id);
  const {  status, name, species, origin, image, gender } = data
  res.status(200).json({ id, status, name, species, origin, image, gender }) 
  } catch (error) {
res .status(500).json({ message: error.message });
  }
/*  axios.get(`${URL}${id}`)
    .then(response => {
      const { data } = response;

      if (data.error) {
        res.status(404).json({ message: "Not found" });
      } else {
        const { id, status, name, species, origin, image, gender } = data;

        res.json({ id, status, name, species, origin, image, gender });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
}*/
}
module.exports = { getCharById };

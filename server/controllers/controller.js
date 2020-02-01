const data = require('./../data');

let getMusics = (req, res) => {
  res.status(200).send(data);
};

let addMusic = () => {};

let editMusic = (req, res) => {
  const targetIndex = data.findIndex(val => val.id === +req.params.id);
  data[targetIndex].favorites = req.body.favorites;
  res.status(200).json(data);
};

let deleteMusic = () => {};

module.exports = {
  getMusics,
  addMusic,
  editMusic,
  deleteMusic
};

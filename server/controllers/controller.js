const data = require('./../data');

let getMusics = (req, res) => {
  res.status(200).send(data);
};

let addMusic = () => {};

let editMusic = () => {};

let deleteMusic = () => {};

module.exports = {
  getMusics,
  addMusic,
  editMusic,
  deleteMusic
};

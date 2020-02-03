const data = require('./../data');

let getMusics = (req, res) => {
  res.status(200).send(data);
};

let addMusic = (req, res) => {
  const { id, artist, name, youtube, lyrics } = req.body;
  data.push({ id, artist, name, youtube, lyrics });
  res.status(200).json(data);
  id += 1;
};

let editMusic = (req, res) => {
  const { newLyrics } = req.body;
  const { id } = req.params;
  let dataIndex = data.findIndex(val => val.id == id);
  data[dataIndex].lyrics = newLyrics;
  res.status(200).json(data);
};

let deleteMusic = (req, res) => {
  const { id } = req.params;
  let dataIndex = data.findIndex(val => val.id == id);
  data.splice(dataIndex, 1);
  res.status(200).json(data);
};

module.exports = {
  getMusics,
  addMusic,
  editMusic,
  deleteMusic
};

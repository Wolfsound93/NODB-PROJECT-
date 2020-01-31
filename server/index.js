const express = require('express');
const {
  getMusics,
  addMusic,
  editMusic,
  deleteMusic
} = require('./controllers/controller');
const app = express();

app.use(express.json());

//endpoints
app.get('/api/musics', getMusics); //reqsting mnusics from the back end file
app.post('/api/musics', addMusic); //using this method to add music
app.put('/api/musics/:id', editMusic); //this method allows me to edit my music card
app.delete('/api/musics/:id', deleteMusic); //allows me to remove the card
//port
const PORT = 5050;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

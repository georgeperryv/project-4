const Category = require('../../models/song')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function addSong (req, res) {
  try {
    // const collection = await Collection.create(req.body)
    const song = new Song(req.body)
    await song.save()

    return res.json(song)
  } catch (error) {
    console.log('error')
  }
}

module.exports = {
  addSong
}
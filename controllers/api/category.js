const Category = require('../../models/category')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function addCategory (req, res) {
  try {
    console.log('this is req.body', req.body)
    console.log('this is req.body.category', req.body.category)
    // const collection = await Collection.create(req.body)
    const category = new Category(req.body)
    await category.save()
    return res.json(category)
  } catch (error) {
    console.log('error')
  }
}

module.exports = {
  addCategory
}

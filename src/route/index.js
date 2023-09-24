const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/concept', function (req, res) {
  res.render('concept', {
    layout: null,

  })
})

router.get('/about', function (req, res) {
  res.render('about', {
    layout: null,

  })
})

router.get('/contacts', function (req, res) {
  res.render('contacts', {
    layout: null,

  })
})



module.exports = router

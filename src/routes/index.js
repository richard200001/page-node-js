const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));//path nos ayuda a dar mejor la dirección conoce en que sistema
     //operativo estamos y hace los / o \ de la forma correcta
     res.render('index', { title: 'Page Web Node' });
  });

  router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
  });
  
  module.exports = router;
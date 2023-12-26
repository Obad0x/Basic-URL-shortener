const express = require('express');
const router = express.Router();
const Url = require('../Models/URL')





router.get('/', (req, res) => res.render('index'))

router.post('/shorten-url', async (req, res)=>{
      try {
        const url = new Url({
            LongUrl: req.body.url
        })
            await Url.create(url);
            res.redirect('/')
      } catch (error) {
        console.log(error)
        
      }
    
    
    
})

module.exports = router;
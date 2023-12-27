const express = require('express');
const router = express.Router();
const Url = require('../Models/URL')



/* GET 
    /- Home Page */

router.get('/', (req, res) => res.render('index'));



/* POST 

/shorten-url- url shortener*/

router.post('/shorten-url', async (req, res)=>{
      try {
        const url = new Url({
            LongUrl: req.body.url
        })
            await Url.create(url);
            res.redirect('/urls')
      } 
      
      catch (error) {
        console.log(error)
        
      }
    
    
    
})

router.get('/urls', async(req, res)=>{
  try {

     const data = await Url.find();

     res.render('urls', {data})
    
  } catch (error) {
    console.log(error);
    
  }
})


/* POST
 : ID - get the link */

 router.get('/:ShortUrl', async(req, res)=>{

      const id = req.params.ShortUrl;
      console.log(id)

      const data = await Url.findOne({
        ShortUrl : id
      })
      res.redirect(data.LongUrl)
 })




module.exports = router;
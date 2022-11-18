const express = require('express');
const Blog = require('../modals/blog')
const router = express.Router();

  router.get('/', (req, res) => {
    res.redirect('/blogs')
  });
  
  router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  //  blog route
  router.get('/blogs', (req, res) => {
      Blog.find().sort({createdAt: -1})
          .then((result) => {
              res.render('index', { title: 'Home', blogs: result });
          })
          .catch((err) => {
              console.log(err)
          }) 
  })
router.post('/blogs', (req, res) => {
  // console.log(req.body )
  const blog = new Blog(req.body)
    
  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    }).catch((err) => {
      console.log(err)
    })
});

  router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

  router.get('/blogs/:id/', (req, res) => {
    const id = req.params.id
    // console.log(req.url)
    Blog.findById(id)
      .then(result => {
      res.render('details', {blog: result, title: 'Blog Details'})
      }).catch((err) => {
      console.log(err)
    })
   
    // next()
  
  })
  router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)  
      .then(result => {
      
        res.status(404).json({ redirect: '/blogs' })
        
      }).catch((err) => {
      console.log(err)
    })
   
  
  })
  
  

  module.exports = router;

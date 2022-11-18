const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
// const routes = require('')

// express app
const app = express();

//  connect to mongoDB
const dbURL = ('mongodb+srv://oslim:oslim123@node-auth.zfpxz58.mongodb.net/nodetutsBlog')
              // 'mongodb+srv://oslim:oslim123@node-auth.zfpxz58.mongodb.net/node-auth'
mongoose.connect(dbURL)
.then(result => console.log('connected to db'))
.catch(err => console.log(err));
app.listen(3002),

//  middleware && static files
app.use(express.static('public'))
// app.use(express.static('../node_modules'))
app.use(express.urlencoded({ extended: true }));


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');


// mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'oslim blog',
//       snippet: 'about my self',
//       body: 'more about my new blog'
//     })
  
//     blog.save()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err, 'my bad');
//       });
// });
// app.get('/all-blog', (req, res) => {
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch(err => {
//         console.log(err);
//       });
// })
// app.get('/blog-id', (req, res) => {
//     Blog.findById("62fc0f9b4cdea66964dc4ef7")
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch(err => {
//         console.log(err);
//       });
//   })

// app.use( blogRoutes)
/*  */





app.use(routes);
// 404 page
app.use( (req, res) => {
  res.status(404).render('404', { title: '404' });
});


// console.log(routes)
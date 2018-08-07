const express = require('express'),
      hbs = require('express-handlebars').create({defaultLayout:'main.hbs'}),
      app = express();
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' })
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})
app.listen(3000, () => {
  console.log('express server started at port 3000')
})
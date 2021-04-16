// set required packages
const express = require('express');
// set app to express function
const app = express();
//set port & CSS stylings, etc
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// require routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
// port listener server set up
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
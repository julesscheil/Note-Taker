// get needed packages
const path = require('path');

// export html route
module.exports = (app) => {
 // for url /notes, take user to notes html page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home (index.html)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};

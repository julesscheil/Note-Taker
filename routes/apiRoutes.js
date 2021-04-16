// require needed packages
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// export API Route
module.exports = (app) => {

  // get data in notes
  app.get("/api/notes", (req, res) => {
    let notesData = fs.readFileSync("db/db.json", "utf8");
    notesData = JSON.parse(notesData);
    res.json(notesData);
  });
  //post data to notes

  app.post("/api/notes", (req, res) => {
    // read the notesData array from the db.json file
    let notesData = fs.readFileSync("db/db.json", "utf8");
    notesData = JSON.parse(notesData);

    const newNote = req.body;
    //generate a unique id and attach to note
    newNote.id = uuidv4();
    notesData.push(newNote);

    // write the notesData array to the db.json file.
    fs.writeFileSync("db/db.json", JSON.stringify(notesData), "utf8");
    res.json(true);
  });
  

};
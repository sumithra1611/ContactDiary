import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "../models/Contact.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/addContact", function (req, res) {
  const reqData = req.body;
  console.log(reqData);
  Contact.find({ number: reqData.number }).then((data) => {
    if (data.length > 0) {
      res.status(400).send("Contact already exists");
    } else {
      const entry = new Contact(reqData);
      entry.save();
      console.log(entry);
      res.status(200).send();
    }
  });
});

app.get("/getContacts", function (req, res) {
  Contact.find({}).then((data) => {
    res.status(200).send(data);
  });
});

app.get("/getContact/:id", function (req, res) {
  const contactId = req.params.id;
  Contact.findById(contactId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.error("Error getting note:", error);
      res.status(500).send("Error getting note");
    });
});

app.put("/updateContact/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;

  Contact.findOneAndUpdate({ _id: id }, data)
    .then(() => {
      res.send("Note Updated successfully");
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
      res.status(500).send("Error Updating note");
    });
});

app.delete("/deleteNote/:id", function (req, res) {
  const contactId = req.params.id;
  Contact.findByIdAndDelete(contactId)
    .then(() => {
      res.send("Note deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
      res.status(500).send("Error deleting note");
    });
});

mongoose
  .connect(
    "mongodb+srv://root:LhhpYyzxIx643KXK@test.brntvas.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // Server Running in PORT 8000
    app.listen(8000, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.log(err);
  });

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  dob: String,
  TOC: Date,
});
const ContactModel = new mongoose.model("Contact", ContactSchema);

export default ContactModel;

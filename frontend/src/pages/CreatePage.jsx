import { useState } from "react";
import axios from "axios";
import { IoArrowBackOutline } from "react-icons/io5";
import{ RiContactsBook2Fill } from "react-icons/ri";

export default function CreatePage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");

  function postData(event) {
    event.preventDefault();

    if (name && contact) {
      let contactInfo = {
        name: name,
        number: +contact,
        dob: DOB,
        email: email,
        TOC: new Date().toLocaleString(),
      };

      axios
        .post("http://localhost:8000/addContact", contactInfo)
        .then((res) => {
          if (res.status === 200) {
            alert("Contact Added Successfully");
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert("Contact Already Exists");
          }
        });

      setName("");
      setContact("");
      setDOB("");
      setEmail("");
    } else {
      alert("Please fill all the fields");
    }
  }

  function handleNameChange(event) 
  {
    let name = event.target.value;
    setName(name);
  }

  function handleContactChange(event) 
  {
    let number = event.target.value;
    setContact(number);
  }

  function handleDOBChange(event) 
  {
    let dob = event.target.value;
    console.log(dob);
    setDOB(dob);
  }

  function handleEmailChange(event) 
  {
    let email = event.target.value;
    setEmail(email);
  }

  return (
    <div className="flex flex-col p-10 w-full h-screen  bg-red-100 items-center ">
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia 
        underline decoration-dotted decoration-pink-400">
        <RiContactsBook2Fill className="text-[3rem] text-pink-800" /> CONTACT DIARY - Add Contact</h1>
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia"></h1>
      <a className="fixed top-6 left-6" href="/home">
        <IoArrowBackOutline className="text-3xl text-slate-700" />
      </a>
        <form className=" p-14 flex items-end gap-2 " onSubmit={postData}>
          <div className=" input-fields flex flex-col gap-2  border-black 
            bg-pink-400 p-5 h-[20rem] w-[20rem] rounded text-center">
            <div className=" p-2 text-center text-white font-serif md: Georgia">Contact Details</div>
              <input
                type="text"
                className=" rounded p-3 "
                name="contact-name"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
              />
              <input
                type="number"
                className="rounded p-3"
                name="cantact-number"
                value={contact}
                placeholder="Contact Number"
                onChange={handleContactChange}
              />
              <input
                type="date"
                className="rounded p-3"
                name="date-of-birth"
                value={DOB}
                onChange={handleDOBChange}
              />
              <input
                type="email"
                name="email-id"
                value={email}
                className="rounded p-3"
                placeholder="Email ID"
                onChange={handleEmailChange}
              /> 
          </div>
          <button
            type="submit"
            className="h-10 px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white"
          >Add
          </button>
        </form>
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoArrowBackOutline } from "react-icons/io5";
import{ RiContactsBook2Fill } from "react-icons/ri";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getContact/${id}`)
      .then((res) => {
        setName(res.data.name);
        setContact(res.data.number);
        setDOB(res.data.dob);
        setEmail(res.data.email);
      })

      .catch((err) => {
        if (err.response.status === 400) {
          alert("Contact Not Found");
        }
      });
  }, []);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");

  function updateContact(event) {
    event.preventDefault();

    let name = event.target[0].value;
    let number = event.target[1].value;
    let dob = event.target[2].value;
    let email = event.target[3].value;

    let contactInfo = {
      name: name,
      number: +number,
      dob: dob,
      email: email,
    };

    axios
      .put(`http://localhost:8000/updateContact/${id}`, contactInfo)
      .then((res) => {
        if (res.status === 200) 
        {
          alert("Contact Updated Successfully");
          navigate("/contacts");
        }
      })
      .catch((err) => {
        if (err.response.status === 400) 
        {
          alert("Contact Already Exists");
        }
      });
  }

  return (
    <div className="flex flex-col p-10 w-full h-screen  bg-red-100 items-center ">
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia 
        underline decoration-dotted decoration-pink-400">
        <RiContactsBook2Fill className="text-[3rem] text-pink-800"/>CONTACT DIARY - Update Details</h1>
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia"></h1>
      <a className="fixed top-6 left-6" href="/home">
        <IoArrowBackOutline className="text-3xl text-slate-700" />
      </a>
      <form className=" p-14 flex items-end gap-2" onSubmit={updateContact}>
      <div className=" input-fields flex flex-col gap-2  border-black 
        bg-pink-400 p-5 h-[20rem] w-[20rem] rounded text-center content-center">
        <div className=" p-2 text-center text-white font-serif md: Georgia">Update Contact Details</div>
          <input
            type="text"
            className=" rounded p-3 "
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className=" rounded p-3 "
            name="contact"
            value={contact}
            placeholder="Contact"
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="date"
            className=" rounded p-3 "
            name="dob"
            value={DOB}
            placeholder="DOB"
            onChange={(e) => setDOB(e.target.value)}
          />
          <input
            type="text"
            className=" rounded p-3 "
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
      <button
          className="px-5 py-2 bg-pink-600  hover:bg-pink-700 rounded text-white"
          type="submit"
        >
          Update
        </button>
      </div>
        
      </form>
    </div>
  );
}

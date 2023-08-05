import { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard";
import { IoArrowBackOutline } from "react-icons/io5";
import{ RiContactsBook2Fill } from "react-icons/ri";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getContacts")
      .then((res) => res.json())
      .then((data) => setContacts(data.sort()));
  }, []);

  return (
    <div className="flex flex-col p-9 w-full min-h-screen bg-red-100 items-center">
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia 
        underline decoration-dotted decoration-pink-400">
        <RiContactsBook2Fill className="text-[3rem] text-pink-800"/>CONTACT DIARY</h1>
      <a className="fixed top-6 left-6" href="/home">
        <IoArrowBackOutline className="text-3xl text-slate-600" />
      </a>
      <h1 className="text-2xl font-bold my-10 font-serif md: Georgia">All Contacts</h1>
      <div className=" border-black bg-pink-300  p-5 flex flex-col gap-5 w-[30rem]">
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactCard key={contact._id} details={contact} />
          ))
        ) : (
          <h1 className="text-xl text-slate-900 font-light text-center">
            No Contacts Found
          </h1>
        )}
      </div>
    </div>
  );
}

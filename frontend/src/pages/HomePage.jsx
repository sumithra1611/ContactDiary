import { IoIosPeople } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import{ RiContactsBook2Fill } from "react-icons/ri";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col p-10 w-full h-screen bg-red-100 items-center">
      <h1 className=" flex text-4xl mb-3 font-serif md: Georgia 
        underline decoration-dotted decoration-pink-400">
          <RiContactsBook2Fill className="text-[3rem] text-pink-800"/>CONTACT DIARY - Home</h1>
      <a className="fixed top-6 left-6" href="/">
        <IoArrowBackOutline className="text-3xl text-slate-700" />
      </a>
        <div className="mx-auto mt-[5rem] relative flex justify-center gap-7 w-95">
          <a
            href="/newcontact"
            className="border bg-pink-500 group hover:bg-pink-600 
              relative overflow-hidden border-black p-7 h-[11.5rem] w-[11.5rem] text-center rounded-lg"
          >
            <span className="font-semibold group-hover:text-white-800 text-white">
              Create Contact
            </span>
            <IoIosPeople className="text-[11rem] group-hover:text-slate-700 absolute text-white-400/200" />
          </a>
          <a
            href="/contacts"
            className="border group bg-pink-500 hover:bg-pink-600 
              relative overflow-hidden h-[11.5rem] w-[11.5rem] border-black p-7 text-center rounded-lg"
          >
            <span className="font-semibold group-hover:text-white-200 text-white">
              View Contacts
            </span>
            <MdOutlineManageSearch className="text-[11rem] group-hover:text-slate-700 absolute text-white-400/200" />
          </a>
        </div>
        <p className="max-w-[50rem] text-center mt-10">
          Click above Icons to <span className="font-bold text-pink-400"> Create </span>{" "}and {""}
         <span className="font-bold text-pink-400">View Contacts .</span>
        </p>
      </div>
    </>
  );
}

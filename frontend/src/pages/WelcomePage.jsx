import {RiContactsBook2Fill} from "react-icons/ri";
export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center text-center bg-red-100 h-screen p-10">
      <RiContactsBook2Fill className="text-[11rem] text-pink-800" />
      <h1 className="text-5xl mb-3  p-5 justify-center font-serif md: Georgia">WELCOME TO CONTACT DIARY</h1>
      <p className="text-lg font-sans  w-[32rem] text-center">
        In this page you can manage your Contacts like {" "}
        <span className="font-bold text-pink-400">Save, Edit, View and Delete your Contacts</span> {" "}
        . cool right.{" "} Hope you like this.
      </p>
      <a
        href="/home"
        className="px-5 py-3 my-6 cursor-pointer bg-pink-500 text-white hover:bg-pink-600 rounded"
      >
        GET STARTED
      </a>
    </div>
  );
}

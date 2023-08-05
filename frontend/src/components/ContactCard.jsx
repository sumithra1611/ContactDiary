import { useState } from "react";
import axios from "axios";

export default function ContactCard(Props) {
  const { details } = Props;

  const [isExpanded, setIsExpanded] = useState(false);

  function deleteContact(id) {
    axios.delete(`http://localhost:8000/deleteNote/${id}`).then((res) => {
      if (res.status === 200) {
        alert("Contact Deleted Successfully");
      }
    });
  }

  return (
    <div
      key={details._id}
      className="flex flex-col gap-2 border p-5 rounded-lg"
    >
      <div className="flex items-center justify-between bg-pink-300">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-col items-start justify-between cursor-pointer rounded"
        >
          <h1 className="text-xl font-bold">{details.name}</h1>
          <h1 className="text-sm font-semibold">
            Mobile Number:
            <span className="text-sm font-normal"> {details.number}</span>
          </h1>
        </div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-pink-500 hover:bg-pink-600 p-2 rounded select-none cursor-pointer"
        >
          more
        </div>
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-semibold">
            DOB:
            <span className="text-sm font-normal"> {details.dob}</span>
          </h1>
          <h1 className="text-sm font-semibold">
            Email:
            <span className="text-sm font-normal"> {details.email}</span>
          </h1>
          <div className="flex gap-3 mt-2">
            <a
              href={`/edit/${details._id}`}
              className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded cursor-pointer"
            >
              Edit
            </a>
            <a
              className="px-5 py-2 bg-pink-800 hover:bg-pink-900 text-white rounded cursor-pointer"
              onClick={() => deleteContact(details._id)}
            >
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

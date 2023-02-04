import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const Notes = () => {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    const fetchallnotes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/notes");
        setnotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchallnotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/notes/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <ul
          role="list"
          className="h-2/3 bg-slate-200 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {notes.map((note) => (
            <li
              key={note.id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow m-4"
            >
              <div className="m-4 mt-10 items-center space-x-6 p-6">
                <div className="flex flex-row justify-between">
                  <div className=" items-center space-x-3 h-auto w-auto">
                    <h1 className="text-sm text-bol font-medium text-gray-900">
                      <span className="font-sans  text-lg">Title : </span>
                      <span className="font-sans text-xl">{note.title}</span>
                    </h1>
                    <h2 className="text-sm font-medium text-gray-900">
                      <span className="font-sans  text-lg">Description : </span>
                      <span className="font-sans text-xl">{note.notescol}</span>
                    </h2>
                  </div>
                  <div className="">
                    <svg
                      onClick={() => handleDelete(note.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <button className="">
          <Link to={"/add "}>Add Notes</Link>
        </button>
      </div>
    </>
  );
};

export default Notes;

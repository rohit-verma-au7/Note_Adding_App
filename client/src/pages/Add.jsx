import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Notes from "./Notes";

const Add = () => {
  const [note, setnote] = useState({
    title: "",
    notescol: "",
  });
  const [allnotes, setallnotes] = useState([]);

  const navigate = useNavigate();

  //Database state save
  const handleChange = (e) => {
    setnote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Local State save
  // const handleChange = (e) => {
  //   setnote({ [e.target.name]: e.target.value });
  // };

  //Post on backend
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/notes", note);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //Local state saver
  // const handleClick = () => {
  //   setallnotes([...allnotes, note]);
  // };
  // console.log("state hai", allnotes);
  return (
    <>
      <Header />
      <div className="flex min-h-full h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Title For Notes :
                </label>
                <div className="mt-1">
                  <input
                    placeholder="Enter Title.."
                    name="title"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="notescol"
                  className="block text-sm font-medium text-gray-700"
                >
                  Notes
                </label>
                <div className="mt-1">
                  <textarea
                    placeholder="Notes..."
                    name="notescol"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleClick}
                >
                  Add Notes
                </button>
              </div>
              <div>
                <div className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <Link to="/">Go To All Notes</Link>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;

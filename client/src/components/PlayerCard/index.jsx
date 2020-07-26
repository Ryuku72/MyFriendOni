import React from "react";
import "./style.css";
import Letter from "../Letter";
import Animation from "../Animation";

function PlayerCard(props) {
  return (
    <div className="w-full h-full p-12 font-mono inline-flex">
      {/* Player Card */}
      <div className="w-1/2 h-full bg-gray-400 rounded-lg shadow-2xl bg-transparent antialiased">
        <header
          className="w-full flex p-4 bg-indigo-500 rounded-t-lg border-4 border-indigo-700"
          style={{ height: "15%" }}
        >
          <p className="w-1/2 flex items-end text-white text-3xl">
            Player Information
          </p>
          <div className="w-1/2 flex items-start justify-end">
            <button className="w-1/6 rounded-full border-2 border-green-700 px-3 py-1 text-sm bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl">
              Edit
            </button>
            <button className="w-1/6 rounded-full border-2 border-red-700 px-3 py-1 text-sm bg-red-500 hover:bg-red-400 hover:text-gray-300 mx-2 shadow-xl">
              Del
            </button>
          </div>
        </header>
        <section
          className="w-full p-8 flex flex-col justify-center border-b-4 border-l-4 border-r-4 border-gray-600 rounded-b-lg text-gray-800 leading-10"
          style={{ height: "85%" }}
        >
          <div className="inline-flex justify-between w-full text-gray-800">
            <p className="font-semibold text-xl">
              Username:
              <span className="capitalize font-thin ml-4">{props.user}</span>
            </p>
          </div>

          <div className="inline-flex justify-between w-full">
            <p className="text-xl">
              <span className=" font-semibold mr-4">Start Date:</span>
              {props.start}
            </p>
          </div>

          <div className="inline-flex justify-between w-full">
            <p className="text-xl">
              <span className="font-semibold mr-4">Last Update:</span>
              {props.update}
            </p>
          </div>

          <p className="mt-8 text-xl underline mb-4 font-semibold">
            High Score
          </p>
          <div className="w-11/12">
            <div className="inline-flex justify-between w-full">
              <p>Japanese Vocabulary</p>
              <p className="flex items-start">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.jpn}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full">
              <p>English Vocabulary</p>
              <p className="flex items-start">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.eng}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full">
              <p>Katakana Letters</p>
              <p className="flex items-start">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.kata}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full">
              <p>Hiragana Letters</p>
              <p className="flex items-start">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.hira}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full mt-6">
              <p className="flex items-start">Total Score</p>
              <p className="flex items-start">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.total}
                </span>
                points
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Delete  and Edit Player */}

      <div className="w-1/2 h-full flex flex-col items-end">
        <div className="w-full py-6 pr-20 pl-12" style={{ height: "50%" }}>
          <div className="w-full h-full border-4 border-green-500 rounded-lg">
            <header
              className="w-full border-b-4 border-green-500 bg-green-600 text-gray-200 flex"
              style={{ height: "20%" }}
            >
              <div className="w-1/2 h-full flex items-center ml-8">
                <p>Edit User Details</p>
              </div>
              <div className="w-1/2 h-full flex items-start justify-end">
                <button className="rounded-full border border-red-600 px-2 text-base text-red-600 bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl">
                  &#10006;
                </button>
              </div>
            </header>
            <main className="h-full bg-gray-300" style={{ height: "80%" }}>
              <form
                id="editForm"
                className="w-full p-4 flex flex-col h-full justify-center"
              >
                <div className="my-2 ml-4 flex items-end" style={{ height: "20%" }}>
                  <label className="w-1/5 text-lg text-gray-800 font-semibold">
                    New Username
                  </label>
                  <input
                    //value="" // props.new-name
                    name="usernameUpdate"
                    type="text"
                    placeholder="Lorem Ipsum" //current username
                    id="usernameUpdate"
                    className="w-3/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                  />
                </div>
                <div className="my-2 ml-4 flex items-end">
                  <label className="w-1/5 text-lg text-gray-800 font-semibold">
                    New Password
                  </label>
                  <input
                    //value="" // props.new-name
                    name="passwordUpdate"
                    type="text"
                    placeholder="#Secret" //current username
                    id="passwordUpdate"
                    className="w-3/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                  />
                </div>
                <div className="w-full flex items-start justify-end mt-6">
                <button className="w-1/6 mr-3 rounded-lg border-2 border-gray-600 px-3 py-1 text-sm bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl">
                    Clear
                  </button>
                  <button className="w-1/6 mr-3 rounded-lg border-2 border-blue-500 px-3 py-1 text-sm bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl">
                    Submit
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
        <div className="w-1/2 p-6" style={{ height: "50%" }}>
          <div className="w-full h-full border-4 border-red-500 rounded-lg">
            <header
              className="w-full border-b-4 border-red-500 bg-red-600 text-gray-200 flex"
              style={{ height: "20%" }}
            >
              <div className="w-1/2 h-full flex items-center ml-8">
                <p>Delete User</p>
              </div>
              <div className="w-1/2 h-full flex items-start justify-end">
                <button className="rounded-full border border-indigo-600 px-2 text-base text-indigo-600 bg-indigo-600 hover:bg-indigo-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl">
                  &#10006;
                </button>
              </div>
            </header>
            <main
              className="h-full bg-gray-300"
              style={{ height: "80%" }}
            >
     <form
                id="deleteForm"
                className="w-full p-4 flex flex-col h-full justify-center"
              >
                <div className="my-2 flex items-end" style={{ height: "20%" }}>
                  <label className="w-1/5 text-sm text-gray-800 font-semibold">
                    Password
                  </label>
                  <input
                    //value="" // props.new-name
                    name="delUser01"
                    type="text"
                    placeholder="Password..." //current username
                    id="delUser01"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                  />
                </div>
                <div className="my-2 flex items-end">
                  <label className="w-1/5 text-sm text-gray-800 font-semibold">
                    Confirm Password
                  </label>
                  <input
                    //value="" // props.new-name
                    name="delUser02"
                    type="text"
                    placeholder="Password..." //current username
                    id="delUser02"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                  />
                </div>
                <div className="w-full flex items-start justify-end mt-6">
                <button className="w-1/5 mr-3 rounded-lg border-2 border-gray-600 py-1 text-xs bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl">
                    Clear
                  </button>
                  <button className="w-1/5 mr-3 rounded-lg border-2 border-blue-500 py-1 text-xs bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl text-center">
                    Submit
                  </button>
                </div>
              </form>



            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;

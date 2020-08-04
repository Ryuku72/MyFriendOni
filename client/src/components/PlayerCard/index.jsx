import React, {useState} from "react";
import "./style.css";

//console.log(new Intl.DateTimeFormat('en-AU', dateFormat).format(new Date(result.data.createdAt)))

function PlayerCard(props) {

  const [editBox, setEditBox] = useState(false)
  const [delBox, setDelBox] = useState(false)

  return (
    <div className="w-full relative xl:p-12 sm:p-2 font-mono block z-20 shadow-2xl" style={{...props.windowStyle}}>
      {/* Player Card */}
      <div className="playerInfoBox p-2 block rounded-lg antialiased z-10">
        <header
          className="xl:w-3/5 md:4/5 flex items-center p-4 bg-indigo-500 rounded-t-lg border-4 border-indigo-700"
          style={{ height: "15%" }}
        >
          <p className="w-1/2 xl:pl-4 md:pl-2 sm:pl-1 flex items-end text-white playerText">
            Player Information
          </p>
          <div className="w-1/2 flex items-start justify-end">
            <button
              className="w-1/6 btnAboutText rounded-full border-2 border-green-700 xl:px-6 sm:px-3 py-2 bg-green-500 hover:bg-green-400 hover:text-gray-300 focus:outline-none shadow-xl flex justify-center items-center"
              onClick={()=>{setEditBox(!editBox)}}
            >
              Edit
            </button>
            <button
              className="w-1/6 btnAboutText rounded-full border-2 border-red-700 xl:px-6 sm:px-3 py-2  bg-red-500 hover:bg-red-400 hover:text-gray-300 focus:outline-none mx-2 shadow-xl flex justify-center items-center"
              onClick={()=>{setDelBox(!delBox)}}
            >
              Del
            </button>
          </div>
        </header>
        <section
          className="xl:w-3/5 md:4/5 p-8 flex flex-col justify-center border-b-4 border-l-4 border-r-4 border-gray-600 rounded-b-lg text-gray-800 xl:leading-10 md:leading-4 bg-gray-400"
          style={{ height: "85%" }}
        >
          <div className="inline-flex justify-between w-full text-gray-800">
            <p className="font-semibold playerHeader">
              Username:
              <span className="capitalize font-thin ml-4">{props.user}</span>
            </p>
          </div>

          <div className="inline-flex justify-between w-full">
            <p className="playerHeader">
              <span className=" font-semibold mr-4">Start Date:</span>
             {props.start}
            </p>
          </div>

          <div className="inline-flex justify-between w-full">
            <p className="playerHeader">
              <span className="font-semibold mr-4">Last Update:</span>
              {props.update}
            </p>
          </div>

          <p className="mt-4 playerHeader underline mb-4 font-semibold">
            High Score
          </p>
          <div className="w-11/12">
            <div className="inline-flex justify-between w-full catText">
              <p>Japanese Vocabulary</p>
              <p className="flex items-start catText">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.jpn}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full catText">
              <p>English Vocabulary</p>
              <p className="flex items-start catText">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.eng}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full catText">
              <p>Katakana Letters</p>
              <p className="flex items-start catText">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.kata}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full catText">
              <p>Hiragana Letters</p>
              <p className="flex items-start catText">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.hira}
                </span>
                points
              </p>
            </div>
            <div className="inline-flex justify-between w-full mt-6 catText">
              <p className="flex items-start">Total Score</p>
              <p className="flex items-start catText">
                <span className="playerInfo text-red-500 font-semibold">
                  {props.total}
                </span>
                points
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Edit Player */}

     {editBox ? 

        <div
          className="editInfoBox py-2 xl:pr-20 sm:pr-1 xl:pl-12 sm:pl-1">
          <div className="relative w-full h-full border-4 border-green-500 rounded-lg">
            <header
              className="w-full border-b-4 border-green-500 bg-green-600 text-gray-200 flex items-center justify-center"
              style={{ height: "25%" }}
            >
              <div className="w-2/3 ml-3 h-full flex flex-row items-center xl:ml-8 sm:ml-3 editTextHeader">
                <p>Edit User Details</p>
              </div>
              <div className="w-1/3 h-full flex items-start justify-end">
                <button
                  className="rounded-full border border-red-600 xl:px-2 md:px-1 text-base text-red-600 bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl focus:outline-none"
                  onClick={()=>{setEditBox(false)}}
                >
                  &#10006;
                </button>
              </div>
            </header>
            <main className="h-full bg-gray-300 editText" style={{ height: "75%" }}>
              <form
                id="editForm"
                className="w-full px-2 flex flex-col h-full items-center justify-center"
                onSubmit={props.onHandleUpdate} 
              >
                <div className="w-full p-2 flex flex-col justify-center" style={{height:"75%"}}>
                <div
                  className="my-2 flex w-full items-end"
                  style={{ height: "20%" }}
                >
                  <label className="w-1/4  text-gray-800 xl:font-semibold sm:font-hairline editText">
                    Previous Pw
                  </label>
                  <input
                    name="updatePreviousPw"
                    value={props.updatePreviousPw}
                    type="text"
                    placeholder="#PreviousPw"
                    id="updatePreviousPw"
                    className="w-3/4 h-full p-1 mx-4 outline-none shadow-xl rounded "
                    onChange={props.onHandlePreviousPassword}
                  />
                </div>
                <div
                  className="my-2 flex w-full items-end"
                  style={{ height: "20%" }}
                >
                  <label className="w-1/4  text-gray-800 xl:font-semibold sm:font-hairline editText">
                    New Username
                  </label>
                  <input
                    name="usernameUpdate"
                    value={props.updateUser}
                    type="text"
                    placeholder="Lorem Ipsum"
                    id="usernameUpdate"
                    className="w-3/4 h-full p-1 mx-4 outline-none shadow-xl rounded "
                    onChange={props.onHandleNewUserName}
                  />
                </div>
                <div
                  className="my-2 flex w-full items-end"
                  style={{ height: "20%" }}
                >
                  <label className="w-1/4  text-gray-800 xl:font-semibold sm:font-hairline editText">
                    New Pw
                  </label>
                  <input
                    name="passwordUpdate"
                    value={props.updatePw}
                    type="text"
                    placeholder="#Secret" 
                    id="passwordUpdate"
                    className="w-3/4 h-full p-1 mx-4 outline-none shadow-xl rounded "
                    onChange={props.onHandleNewPassword}
                    onSubmit={props.onHandleUpdate} 
                  />
                </div>
                </div>
                <div className="w-full flex justify-center px-2 items-center" style={{height:"30%"}}>
                    <div className="w-3/5" style={{...props.editBoxError}}>
                        <p className=" text-red-500 font-semibold rounded-lg mr-2">{props.editErrorMsg}</p>
                    </div>
                  <button className="w-1/5 flex justify-center items-center mr-3 rounded-lg border-2 border-gray-600 px-3 py-1 btnAboutText bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={props.resetEditForm}
                  type="button"
                  >
                    Clear
                  </button>
                  <button
                    className="w-1/5 flex justify-center items-center mr-3 rounded-lg border-2 border-blue-500 px-3 py-1 btnAboutText bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl focus:outline-none"
                    onClick={props.onHandleUpdate}
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </main>
            <div
              className="bg-black z-10 w-full h-full absolute top-0 xl:p-6 sm:p-2 xl:leading-10 sm:leading-6 catText items-center"
              style={{ ...props.confirmEdit }}
            >
              <div className="flex flex-col justify-center w-full h-full">
              <p className="text-white text-center font-mono font-semibold underline editTextHeader">
                Confirm Update
              </p>
              <p className="text-white text-center font-mono editText">New UserName: {props.updateUser}</p>
              <p className="text-white text-center font-mono editText">New Password: {props.updatePw}</p>
             
              <div className="w-full flex items-start justify-end mt-6">
              <div className="w-3/5" style={{...props.updateEditError}}>
                        <p className="text-xs text-red-500 font-semibold rounded-lg mr-2">{props.editErrorMsg}</p>
                    </div>
                <button
                  className="w-1/6 mr-3 rounded-lg border-2 border-red-600 px-2 bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none xl:text-lg sm:text-xs"
                  onClick={props.cancelUpdate}
                >
                  &#10008;
                </button>
                <button className="w-1/6 mr-3 rounded-lg border-2 border-green-500 px-2 bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl focus:outline-none xl:text-lg sm:text-xs"
                onClick={props.updateDetails}
                >
                  &#10004;
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

      : <div></div> }

      {delBox ? 

        <div
          className="delInfoBox xl:p-6 sm:p-1">
          <div className="relative w-full h-full border-4 border-red-500 rounded-lg">
            <header
              className="w-full border-b-4 border-red-500 bg-red-600 text-gray-200 flex"
              style={{ height: "25%" }}
            >
              <div className="w-1/2 2/3 h-full flex items-center xl:ml-8 sm:ml-2 editTextHeader">
                <p>Delete User</p>
              </div>
              <div className="w-1/2 1/3 h-full flex items-start justify-end">
                <button
                  className="rounded-full border border-indigo-600 xl:px-2 md:px-1 text-base text-indigo-600 bg-indigo-600 hover:bg-indigo-500 hover:text-gray-300 xl:mx-3 sm:mx-2 my-2 antialiased shadow-xl focus:outline-none"
                  onClick={()=>{setDelBox(false)}}
                >
                  &#10006;
                </button>
              </div>
            </header>
            <main className="h-full bg-gray-300" style={{ height: "75%" }}>
              <form
                id="deleteForm"
                className="w-full p-4 flex flex-col h-full justify-center editTextHeader"
                onSubmit={props.handleDeleteUser} 
              >
                <div className="my-2 flex items-star" style={{ height: "20%" }}>
                  <label className="w-2/5 text-gray-800 font-semibold">
                    Password
                  </label>
                  <input
                    name="delUser01"
                    value={props.passwordOne}
                    type="text"
                    placeholder="Password..."
                    id="delUser01"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded "
                    onChange={props.onHandlePasswordOne}
                    onSubmit={props.handleDeleteUser} 
                  />
                </div>
                <div className="my-2 flex items-end">
                  <label className="w-2/5  text-gray-800 font-semibold">
                    Confirm Pw
                  </label>
                  <input
                    name="delUser02"
                    value={props.passwordTwo}
                    type="text"
                    placeholder="Password..."
                    id="delUser02"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded "
                    onChange={props.onHandlePasswordTwo}
                    onSubmit={props.handleDeleteUser} 
                  />
                </div>
                <div className="w-full flex justify-between mt-6 items-center">
                    <div className="w-3/5" style={{...props.deleteBoxError}}>
                        <p className="text-xs text-red-500 font-semibold rounded-lg mr-2">{props.deleteErrorMsg}</p>
                    </div>
                  <button
                    className="w-1/5 mr-3 rounded-lg border-2 border-gray-600 py-1 btnAboutText bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none flex justify-center items-center"
                    onClick={props.resetDeleteForm}
                  >
                    Clear
                  </button>
                  <button
                    className="w-1/5 mr-3 rounded-lg border-2 border-blue-500 py-1 btnAboutText bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl text-center focus:outline-none flex justify-center items-center"
                    onClick={props.handleDeleteUser} 
                  >
                    Submit
                  </button>
                </div>
              </form>
            </main>
            <div
              className="bg-black z-10 w-full h-full absolute top-0 catText flex flex-col justify-center p-6 xl:leading-10 sm:leading-6"
              style={{...props.confirmDeleteStyle}}
            >
              <p className="text-white text-center font-mono mb-4 font-semibold underline">
                Confirm Delete
              </p>
              <p className="text-white text-centerfont-mono capitalize">
                User: <span className="mx-2">{props.user}</span>{" "}
              </p>
              <div className="w-full flex items-start justify-end mt-8">
                <button
                  className="xl:w-1/6 sm:w-1/12 mr-3 rounded-lg border-2 border-red-600 px-2 xl:text-lg sm:text-sm bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={props.cancelDelete}
                >
                  &#10008;
                </button>
                <button className="xl:w-1/6 sm:w-1/12 mr-3 rounded-lg border-2 border-green-500 px-2 xl:text-lg sm:text-sm bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl focus:outline-none" onClick={props.deleteUser}>
                  &#10004;
                </button>
              </div>
            </div>
          </div>
        </div>
        : <div></div> }

      </div>
  );
}

export default PlayerCard;
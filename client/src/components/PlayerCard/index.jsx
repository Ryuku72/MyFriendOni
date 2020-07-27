import React, { useState, useEffect } from "react";
import "./style.css";

function PlayerCard(props) {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const [updateUser, setUpdateUser] = useState("")
  const [updatePw, setUpdatePw] = useState("");

  const [errorMsg, setErrorMsg] = useState({
    edit: "",  
    delete: ""
  })
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [deleteError, setDeleteError] = useState(false)
  const [updateError, setUpdateError] = useState(false)
  const [confirm, setConfirm] = useState({
    edit: false,
    delete: false,
  });

  useEffect(()=> {
    confirmUpdate()
  }, [props.updateDetails])

  function toggleEditBox(event) {
    event.preventDefault();
    setEditForm(!editForm);
    setUpdateUser("");
    setUpdatePw("");
    setErrorMsg({...errorMsg, edit:""})
    setConfirm({ ...confirm, edit: false });
  }

  function toggleDeleteBox(event) {
    event.preventDefault();
    setDeleteForm(!deleteForm);
    setPasswordOne("");
    setPasswordTwo("");
    setErrorMsg({...errorMsg, delete:""})
    setConfirm({ ...confirm, delete: false });
  }

  function onHandleUpdate(event) {
    event.preventDefault();
   //console.log(event);
   setUpdateError(false)

    if  ((updateUser === "" ) && (updatePw === "" )){
    setErrorMsg({...errorMsg, edit:"Error: Inputs are blank"})
    setUpdateError(true)
    }
    else if (updateUser === "" ) {
        setErrorMsg({...errorMsg, edit:"Error: Username is blank"})
        setUpdateError(true)
    } 
    else if (updatePw === "" ) {
        setErrorMsg({...errorMsg, edit:"Error: Password is blank"})
        setUpdateError(true)
    }
    else {
       setConfirm({ ...confirm, edit: true });
    }
  }

  function handleDeleteUser(event) {
    event.preventDefault();

    if ((passwordOne === "" ) || (passwordTwo === "" )){
        setErrorMsg({...errorMsg, delete:"Error: Input is blank"})
        setPasswordOne("");
        setPasswordTwo("");
        setDeleteError(true)
    }
    else if (passwordOne !== passwordTwo) {
        setErrorMsg({...errorMsg, delete:"Error: Inputs don't match"})
        setPasswordOne("");
        setPasswordTwo("");
        setDeleteError(true)
    }
    else if ((passwordOne !== props.password) || (passwordTwo !== props.password)){
        setErrorMsg({...errorMsg, delete: "Error: Incorrect password"})
        setPasswordOne("");
        setPasswordTwo("");
        setDeleteError(true)
    } else {
        setConfirm({ ...confirm, delete: true}) 
        } 
  }

  function resetEditForm(event) {
    event.preventDefault();
    setUpdateUser("");
    setUpdatePw("");
    setUpdateError(false)
  }

  function resetDeleteForm(event) {
    event.preventDefault();
    setPasswordOne("");
    setPasswordTwo("");
    setDeleteError(false)
  }

  function cancelUpdate(event){
        event.preventDefault();
        setUpdateUser("");
        setUpdatePw("");
        setConfirm({ ...confirm, edit: false })
  }

  function cancelDelete(event){
        event.preventDefault();
        setPasswordOne("");
        setPasswordTwo("");
        setConfirm({ ...confirm, delete: false })
  }

  function confirmUpdate(){
      setConfirm({ ...confirm, edit: false });
      setUpdateUser("");
      setUpdatePw("");
      setErrorMsg({...errorMsg, edit:"User Details Updated!"})
      setUpdateError(true)
  }

  return (
    <div className="w-full p-12 font-mono inline-flex" style={{...props.windowStyle}}>
      {/* Player Card */}
      <div className="w-1/2 h-full rounded-lg shadow-2xl antialiased">
        <header
          className="w-full flex p-4 bg-indigo-500 rounded-t-lg border-4 border-indigo-700"
          style={{ height: "15%" }}
        >
          <p className="w-1/2 flex items-end text-white text-3xl">
            Player Information
          </p>
          <div className="w-1/2 flex items-start justify-end">
            <button
              className="w-1/6 rounded-full border-2 border-green-700 px-3 py-1 text-sm bg-green-500 hover:bg-green-400 hover:text-gray-300 focus:outline-none shadow-xl"
              onClick={toggleEditBox}
            >
              Edit
            </button>
            <button
              className="w-1/6 rounded-full border-2 border-red-700 px-3 py-1 text-sm bg-red-500 hover:bg-red-400 hover:text-gray-300 focus:outline-none mx-2 shadow-xl"
              onClick={toggleDeleteBox}
            >
              Del
            </button>
          </div>
        </header>
        <section
          className="w-full p-8 flex flex-col justify-center border-b-4 border-l-4 border-r-4 border-gray-600 rounded-b-lg text-gray-800 leading-10 bg-gray-400"
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

      {/* Edit Player */}

      <div className="w-1/2 h-full flex flex-col items-end">
        <div
          className="w-3/4 py-6 pr-20 pl-12"
          style={{
            height: editForm ? "50%" : "0",
            opacity: editForm ? "1" : "0",
          }}
        >
          <div className="relative w-full h-full border-4 border-green-500 rounded-lg">
            <header
              className="w-full border-b-4 border-green-500 bg-green-600 text-gray-200 flex"
              style={{ height: "20%" }}
            >
              <div className="w-1/2 h-full flex items-center ml-8">
                <p>Edit User Details</p>
              </div>
              <div className="w-1/2 h-full flex items-start justify-end">
                <button
                  className="rounded-full border border-red-600 px-2 text-base text-red-600 bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl focus:outline-none"
                  onClick={() => setEditForm(false)}
                >
                  &#10006;
                </button>
              </div>
            </header>
            <main className="h-full bg-gray-300" style={{ height: "80%" }}>
              <form
                id="editForm"
                className="w-full p-8 flex flex-col h-full justify-center"
                onSubmit={onHandleUpdate}
              >
                <div
                  className="my-2 flex items-end"
                  style={{ height: "20%" }}
                >
                  <label className="w-1/4 text-sm text-gray-800 font-semibold">
                    New Username
                  </label>
                  <input
                    name="usernameUpdate"
                    value={updateUser}
                    type="text"
                    placeholder="Lorem Ipsum" //current username
                    id="usernameUpdate"
                    className="w-3/4 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                    onChange={(event) => setUpdateUser(event.target.value.toLowerCase())}
                  />
                </div>
                <div
                  className="my-2 flex items-end"
                  style={{ height: "20%" }}
                >
                  <label className="w-1/4 text-sm text-gray-800 font-semibold">
                    New Password
                  </label>
                  <input
                    name="passwordUpdate"
                    value={updatePw}
                    type="text"
                    placeholder="#Secret" //current username
                    id="passwordUpdate"
                    className="w-3/4 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                    onChange={(event) => setUpdatePw(event.target.value.toLowerCase())}
                    onSubmit={onHandleUpdate}
                  />
                </div>
                <div className="w-full flex justify-between mt-4  items-center">
                    <div className="w-3/5" style={{opacity: updateError ? "1" : "0"}}>
                        <p className="text-sm text-red-500 font-semibold rounded-lg mr-2">{errorMsg.edit}</p>
                    </div>
                  <button className="w-1/5 flex justify-center items-center mr-3 rounded-lg border-2 border-gray-600 px-3 py-1 text-xs bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={resetEditForm}
                  type="button"
                  >
                    Clear
                  </button>
                  <button
                    className="w-1/5 flex justify-center items-center mr-3 rounded-lg border-2 border-blue-500 px-3 py-1 text-xs bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl focus:outline-none"
                    onClick={onHandleUpdate}
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </main>
            <div
              className="bg-black z-10 w-full h-full absolute top-0 flex flex-col justify-center p-8 leading-10"
              style={{ display: confirm.edit ? "block" : "none" }}
            >
              <p className="text-white text-center font-mono font-semibold underline">
                Confirm Update
              </p>
              <p className="text-white text-centerfont-mono">New UserName: {updateUser}</p>
              <p className="text-white text-centerfont-mono">New Password: {updatePw}</p>
             
              <div className="w-full flex items-start justify-end mt-6">
              <div className="w-3/5" style={{opacity: updateError ? "1" : "0"}}>
                        <p className="text-xs text-red-500 font-semibold rounded-lg mr-2">{errorMsg.edit}</p>
                    </div>
                <button
                  className="w-1/6 mr-3 rounded-lg border-2 border-red-600 px-2 text-lg bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={cancelUpdate}
                >
                  &#10008;
                </button>
                <button className="w-1/6 mr-3 rounded-lg border-2 border-green-500 px-2 text-lg bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl focus:outline-none" value={updatePw} name={updateUser}
                onClick={props.updateDetails}
                >
                  &#10004;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-1/2 p-6"
          style={{
            height: deleteForm ? "50%" : "0",
            opacity: deleteForm ? "1" : "0",
          }}
        >
          <div className="relative w-full h-full border-4 border-red-500 rounded-lg">
            <header
              className="w-full border-b-4 border-red-500 bg-red-600 text-gray-200 flex"
              style={{ height: "20%" }}
            >
              <div className="w-1/2 h-full flex items-center ml-8">
                <p>Delete User</p>
              </div>
              <div className="w-1/2 h-full flex items-start justify-end">
                <button
                  className="rounded-full border border-indigo-600 px-2 text-base text-indigo-600 bg-indigo-600 hover:bg-indigo-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl focus:outline-none"
                  onClick={() => setDeleteForm(false)}
                >
                  &#10006;
                </button>
              </div>
            </header>
            <main className="h-full bg-gray-300" style={{ height: "80%" }}>
              <form
                id="deleteForm"
                className="w-full p-4 flex flex-col h-full justify-center"
              >
                <div className="my-2 flex items-end" style={{ height: "20%" }}>
                  <label className="w-1/5 text-sm text-gray-800 font-semibold">
                    Password
                  </label>
                  <input
                    name="delUser01"
                    value={passwordOne}
                    type="text"
                    placeholder="Password..." //current username
                    id="delUser01"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                    onChange={(event) => setPasswordOne(event.target.value)}
                    onSubmit={handleDeleteUser}
                  />
                </div>
                <div className="my-2 flex items-end">
                  <label className="w-1/5 text-sm text-gray-800 font-semibold">
                    Confirm Password
                  </label>
                  <input
                    name="delUser02"
                    value={passwordTwo}
                    type="text"
                    placeholder="Password..." //current username
                    id="delUser02"
                    className="w-4/5 h-full p-2 mx-2 outline-none shadow-xl rounded text-base"
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    onSubmit={handleDeleteUser}
                  />
                </div>
                <div className="w-full flex justify-between mt-6 items-center">
                    <div className="w-3/5" style={{opacity: deleteError ? "1" : "0"}}>
                        <p className="text-xs text-red-500 font-semibold rounded-lg mr-2">{errorMsg.delete}</p>
                    </div>
                  <button
                    className="w-1/5 mr-3 rounded-lg border-2 border-gray-600 py-1 text-xs bg-gray-600 hover:bg-gray-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none flex justify-center items-center"
                    onClick={resetDeleteForm}
                  >
                    Clear
                  </button>
                  <button
                    className="w-1/5 mr-3 rounded-lg border-2 border-blue-500 py-1 text-xs bg-blue-500 hover:bg-blue-400 hover:text-gray-300 shadow-xl text-center focus:outline-none flex justify-center items-center"
                    onClick={handleDeleteUser}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </main>
            <div
              className="bg-black z-10 w-full h-full absolute top-0 flex flex-col justify-center p-10 leading-10"
              style={{ display: confirm.delete ? "block" : "none" }}
            >
              <p className="text-white text-center font-mono mb-4 font-semibold underline">
                Confirm Delete
              </p>
              <p className="text-white text-centerfont-mono capitalize">
                User: <span className="mx-2">{props.user}</span>{" "}
              </p>
              <div className="w-full flex items-start justify-end mt-8">
                <button
                  className="w-1/6 mr-3 rounded-lg border-2 border-red-600 px-2 text-lg bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={cancelDelete}
                >
                  &#10008;
                </button>
                <button className="w-1/6 mr-3 rounded-lg border-2 border-green-500 px-2 text-lg bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl focus:outline-none" onClick={props.deleteUser}>
                  &#10004;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;

import React from "react";
import "./style.css";
import SearchBtn from "../SearchButton";

function SearchNav(props) {
  console.log(props.error)
  return (
    <nav className="w-full z-20 searchNavFont bg-gray-100" style={{...props.display}}>
      <form id="searchBar" className="w-3/5 inline-flex p-3">
        <div className="form-group inline-flex w-full h-10">
          <div className="border-2 w-1/2 mr-2 shadow-lg p-1 inline-flex align-middle items-center">
            <input
              className="w-full h-full px-2 ml-2 outline-none"
              placeholder="Search database..."
              type="text"
              list="searchResults"
              value={props.search}
              onChange={props.onHandleInputChange}
            />
            <ul className="absolute hidden text-gray-700 pt-1">
              <li>
                <a
                  href="/#"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
                  Search Results...
                </a>
              </li>
            </ul>
          </div>
          <datalist id="searchResults">
          {props.name.map((result, index) => (
            <option value={result} key={index}></option>
            ))}
          </datalist>
          <SearchBtn title={props.sort} style={{ backgroundColor: "#90cdf4" }}>
            <ul className="searchDropdownOne pt-2 z-50">
            <li>
                <a
                  href="/#"
                  className="rounded-t w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  name="Row"
                  onClick={props.onHandleSort}
                  style={props.row}
                >
                  Row
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="bg-gray-200 w-full hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  onClick={props.onHandleSort}
                  style={props.jpn}
                  name="Japanese"
                >
                  Japanese
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="bg-gray-200 w-full hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  onClick={props.onHandleSort}
                  style={props.eng}
                  name="English"
                >
                  English
                </a>
              </li>
            </ul>
          </SearchBtn>
          <SearchBtn style={{ backgroundColor: "#a0aec0" }} title={props.order}>
            <ul className="searchDropdownTwo pt-2 z-50">
              <li>
                <a
                  href="/"
                  className="rounded-t w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  onClick={props.onHandleOrder}
                  name="Ascend"
                  style={props.ascend}
                >
                  Ascend
                </a>
              </li>
              <li> <a
                  href="/"
                  className="rounded-b w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  onClick={props.onHandleOrder}
                  name="Descend"
                  style={props.descend}
                >
                  Descend
                </a></li>
            </ul>
          </SearchBtn>
          <button
            type="submit"
            onClick={props.onHandleSubmit}
            className="mr-2 w-32 bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center"
          >
            Submit
          </button>

          <button
            type="reset"
            onClick={props.clearForm}
            className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="w-2/5 flex items-center justify-end pr-12 h-16">
      <div
          role="alert"
          className="w-2/3 mx-2 flex flex-col justify-center rounded transition duration-700 ease-out"
          style={{ ...props.alert }}>
          <p className="bg-red-400 text-gray-100 font-semibold py-2 px-8 rounded text-center">
            {props.error}
          </p>
        </div>

      </div>
    </nav>
  );
}

export default SearchNav;

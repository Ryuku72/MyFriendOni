import React from "react";
import "./style.css";
import SearchBtn from "../SearchButton";

function SearchNav(props) {
return (
    <nav className="flex w-full z-20">
        <form id="searchBar" className="w-3/5 inline-flex p-3">
            <div className="form-group inline-flex w-full h-10">
            <div className="border-2 w-1/2 mr-2 shadow-lg p-1 inline-flex align-middle items-center">
            <input 
            className="w-full h-full px-2 ml-2 outline-none"
            placeholder="Search database..."
            type="text"
            value={props.search}
            onChange={props.onHandleInputChange}
            />
               <ul className="absolute hidden text-gray-700 pt-1">
                <li>
                     <a href='/#' className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
                        Search Results...
                    </a></li>
                </ul>
                </div>
                <datalist id="searchResults">
                <option value="" key="" />
                </datalist>
                <SearchBtn title="Sort By" style={{backgroundColor:"#90cdf4"}}>
                    <ul className="absolute pt-2 z-50">
                    <li>
                <a href="/#" className="rounded-t w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="rowTab" onClick={props.onHandleSort} style="">
               Row</a>
               </li>
               <li>
                <a href="/#" className="bg-gray-200 w-full hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleSort} style="" name="jpnTab" >
                Japanese</a></li>
                <li>
                <a href="/#" className="bg-gray-200 w-full hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleSort} style="" name="engTab">
                English</a></li>
                    </ul>
                </SearchBtn >
                <SearchBtn style={{backgroundColor:"#a0aec0"}} title="Order By">
                <ul className="absolute pt-2 z-50">
                    <li>
                <a href="/" className="rounded-t w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleOrder} name="Ascend" style="">
                Ascend</a></li>
                        <li>Descend</li>
                    </ul>
                </SearchBtn>
                <button type="submit" onClick={props.onHandleOrder}  
        className="mr-2 w-32 bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
          Submit</button>

        <button type="reset" onClick={props.clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>
             
                </div>
        </form>
        <div>

            </div>
    </nav>
)
}

export default SearchNav;
import React from "react";
import "./App.css";

function App() {

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 px-4 py-3 my-8 text-orange-500">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-amber-50"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-">
            Copy
          </button>
        </div>

        
        <div className="flex text-sm gap-x-3">
          {/*  Range Input*/}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>
          
          {/* Number CheckBox*/}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              // defaultChecked={numberAllowed}
              id="numberInput"
              // onChange={() => setNumberAllowed((prev) => !prev)}
            />

            <label>Numbers</label>
          </div>

          {/*Character Checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              // defaultChecked ={charAllowed}
              id="characterInput"
              // onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

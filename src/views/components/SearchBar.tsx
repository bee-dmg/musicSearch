import React from "react";
import { useEffect, useState } from "react";
import {Button} from 'reactstrap';
function SearchBar(props:
   {userInput:any, setUserInput:any, handleSubmit:any}
  ) {
 const userInput=props.userInput;
 const setUserInput=props.setUserInput;
const handleSubmit=props.handleSubmit;


  return (
    <div className="searchBar">
     
      <form onSubmit={(e) => handleSubmit(e,userInput)}>
        
        <div><label>
          
          <input className="inputOne"
            type="text"
            placeholder="Search value..."
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              e.preventDefault();
            }}
          />
        </label>
        </div>
        <div className="submitBtnContainer">
        <Button className="submitBtn" color="primary" type="button" value="Submit" onClick={(e) => handleSubmit(e,userInput)} >Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

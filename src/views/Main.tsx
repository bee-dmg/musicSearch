import React from "react";
import { useState, useEffect } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { Container, Row, Col } from "reactstrap";
import Options from "../secrets/Options";

// Main Component returns a view that shows a search bar and the search results
// this calls the API and returns cards to the view if there are results
function Main() {
  const [userInput, setUserInput] = useState("");
  const [handleData, setHandleData] = useState();

  // callAPI makes the call to rapidapi to query the input data
  // it uses the fetch method to make this request
  function callAPI() {
    const options = Options;
    const url: string =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userInput;

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {setHandleData(response.data)
      console.log(response.data)})
      .catch((err) => console.error(err));
  }

  // handleSubmit is a function tied to the press of the input submit button
  // this function calls callAPI and prevents the default behavior of the submit button.
  function handleSubmit(event: Event) {
    callAPI();
    event.preventDefault();
  }

  return (
    <div className="searchBar">
      <Container>
        <Row>
          <SearchBar
            userInput={userInput}
            setUserInput={setUserInput}
            handleSubmit={handleSubmit}
          />
        </Row>{" "}
        <Row xs={1} md={3} xl={5} xxl={6}>
          {handleData != undefined ? (
            <Results
              key={userInput}
              query={userInput}
              handleData={handleData}
            />
          ) : (
            <div></div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Main;

import React from "react";
import { Button } from "reactstrap";

// SearchBar component renders a search bar
// it takes the userInput and setUserInput variables as parameters from the Main component through props
// it also takes the handleSubmit function as a parameter from the Main component
// userInput and setUserInput should be defined in parent with useState
// ex: [ userInput, setUserInput ] = useState("");
// it uses userInput for the value of the searchbar, and setUserInput for the onChange handler of input
// handleSubmit is used to handle the press of the submit button
function SearchBar(props: {
  userInput: string;
  setUserInput: Function;
  handleSubmit: Function;
  error: string;
  setError: Function;
}) {
  const { userInput, setUserInput, handleSubmit, setError } = props;

  // This function accepts the user input event and validates that it is not blank
  // if user input is blank, error state is set to "Please enter valid input" and this error is displayed to the user in the Main
  function validateInput(e: any) {
    e.preventDefault();
    if (userInput !== "" && userInput !== " ") {
      handleSubmit(e, userInput);
      setError("");
    } else {
      setError("Please enter valid input");
    }
  }
  return (
    <div className="searchBar">
      <form onSubmit={(e) => validateInput(e)}>
        <div>
          <label>
            <input
              alt="userInputTextBox"
              className="inputOne"
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
          <Button
            disable={userInput !== ""}
            className="submitBtn"
            color="primary"
            type="button"
            value="Submit"
            name="submitButton"
            onClick={(e) => {
              validateInput(e);
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

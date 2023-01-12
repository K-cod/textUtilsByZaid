
import React, { useState } from "react";
function TextForm(props) {
  const [text, changeText] = useState("Default Text");
  const onChange = (event) => {
    changeText(event.target.value);
  };
  const onUpperCase = () => {
    let newText = text.toUpperCase();
    changeText(newText);
    if (text !== "") {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Sucess!";
      
      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Successfully converted to upperCase";
      document.getElementById("alertBox").style.display = "block";
    } else if (text === "" || text === null) {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Failed!";
      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Please write something, dont leave it empty";
      document.getElementById("alertBox").style.display = "block";
      setTimeout(() => {
        document.getElementById("alertBox").style.display = "none";
      }, 2000);
    }
    setTimeout(() => {
      document.getElementById("alertBox").style.display = "none";
    }, 2000);
  };
  const onLowerCase = () => {
    changeText(text.toLowerCase());
    if (text !== "") {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Sucess!";

      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Successfully converted to lowerCase";
      document.getElementById("alertBox").style.display = "block";

      setTimeout(() => {
        document.getElementById("alertBox").style.display = "none";
      }, 2000);
    } else if (text === "") {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Failed!";
      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Please do not leave the section empty";
      document.getElementById("alertBox").style.display = "block";
      setTimeout(() => {
        document.getElementById("alertBox").style.display = "none";
      }, 2000);
    }
  };
  const onClear = () => {
    changeText(text.replace(text, ""));
    if (text !== "") {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Sucess!";
      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Successfully cleared";
      document.getElementById("alertBox").style.display = "block";
      setTimeout(() => {
        document.getElementById("alertBox").style.display = "none";
      }, 2000);
    } else if (text === "") {
      document
        .getElementById("alertBox")
        .querySelector("#taskStatus").innerHTML = "Failed!";
      document.getElementById("alertBox").querySelector("#taskName").innerHTML =
        "Already cleared";
      document.getElementById("alertBox").style.display = "block";
      setTimeout(() => {
        document.getElementById("alertBox").style.display = "none";
      }, 2000);
    }
  };
  const showWords = () => {
    if (text === "") {
      return 0;
    } else if (text !== "") {
      return text.trim().split(" ").length;
    }
  };
  return (
    <>
      <div className="textForm">
        <textarea
          id="form"
          name="text"
          cols="30"
          rows="10"
          value={text}
          onChange={onChange}
        ></textarea>
      </div>
      <div className="buttons">
        <button className="buttonx" id="upperCase" onClick={onUpperCase}>
          upperCase
        </button>
        <button className="buttonx" id="lowerCase" onClick={onLowerCase}>
          lowerCase
        </button>
        <button className="buttonx" id="clear" onClick={onClear}>
          clear
        </button>
      </div>
      <div className="infoDiv">
        <p id="noOfWords">No of words are {showWords()}</p>
      </div>
    </>
  );
}

export default TextForm;

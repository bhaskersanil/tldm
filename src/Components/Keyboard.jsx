import React from "react";

export default function Keyboard() {
  return (
    <React.Fragment>
      <input type="radio" name="color" id="pink" checked />
      <label for="pink"></label>
      <input type="radio" name="color" id="yellow" />
      <label for="yellow"></label>
      <input type="radio" name="color" id="green" />
      <label for="green"></label>
      <div id="keyboard">
        <div className="boardLayer"></div>
        <div className="boardLayer"></div>
        <div className="boardLayer"></div>
        <div className="boardLayer"></div>
        <div className="boardLayer"></div>
        <div className="boardLayer"></div>
        <div className="boardLayer boardShadow"></div>
        <div className="keyRow">
          <div className="key darker"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key darker"></div>
        </div>
        <div className="keyRow">
          <div className="key secondary"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key doubleWidth secondary"></div>
          <div className="key darker"></div>
        </div>
        <div className="keyRow">
          <div className="key moreWidth secondary"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key moreWidth secondary"></div>
          <div className="key darker"></div>
        </div>
        <div className="keyRow">
          <div className="key doubleWidth secondary"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key doubleWidth secondary"></div>
          <div className="key darker"></div>
        </div>
        <div className="keyRow">
          <div className="key moreThanDouble secondary"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key moreWidth secondary"></div>
          <div className="key"></div>
          <div className="key darker"></div>
        </div>
        <div className="keyRow">
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key spaceBar"></div>
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key secondary"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

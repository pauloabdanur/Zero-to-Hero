import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";

function App() {
  const [text, setText] = useState("");
  const [txtList, setTxtList] = useState([
    "This is a template text. Click on the 'check' button to set the task as done!",
    "If you wanna add a task, just write it in the field above and then press 'Add!'."
  ]);

  const addItem = () => {
    setTxtList([...txtList, text]);
  };

  const deleteItem = index => {
    let array = txtList.slice();
    array.splice(index, 1);
    setTxtList(array);
  };

  const Button = styled.div`
    /* This renders the buttons above... Edit me! */
    border-radius: 7.5px;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid gray;
    color: black;
    position: absolute;
    /* The GitHub button is a primary button
  * edit this to target it specifically! */
    ${props =>
      props.primary &&
      css`
        color: palevioletred;
      `}
  `;

  const TextListWrapper = styled.div`
    margin-right: 10px;
    text-align: justify;
    text-decoration-color: black;
    font-weight: 500;
    font-family: Verdana, Geneva, sans-serif;
  `;

  return (
    <div className="App">
      <header>
        <h2 id="title">TO DO LIST</h2>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            addItem();
          }}
        >
          <input
            placeholder="Task"
            className="form-input"
            onChange={e => setText(e.target.value)}
            required
            maxLength="100"
          />
          <button id="add-bt"> Add </button>
        </form>
      </header>
      <TextListWrapper>
        <h3 id="list-title"> Things I gotta do: </h3>
        {txtList.map((text, index) => (
          <ul id="list" key={index}>
            <div id="button-remove">
              <Button
                textColor="#01d1e5"
                backgroundColor="lavenderblush"
                id="remove-bt"
                onClick={() => deleteItem(index)}
              />
            </div>
            <div id="text">{text}</div>
            <hr id="linha-hr"></hr>
          </ul>
        ))}
      </TextListWrapper>
    </div>
  );
}

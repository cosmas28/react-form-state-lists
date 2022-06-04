/**
 * Add and Delete Items From the List 
 * This challenge is perhaps the most commonly asked React coding challenge for mid-level React developers. 

 *In this challenge, the developer has to create an input field with a button.

 *When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list. 
 The motive of this challenge is to check how good the developer is with forms, state, and lists.  
 */
import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { newItem: "", items: [] };
  }

  generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  onChangeHandler = (event) => {
    this.setState({ ...this.state, newItem: event.target.value });
  };

  onAddItemHandler = () => {
    this.setState(
      {
        ...this.state,
        items: this.state.items.concat({
          name: this.state.newItem,
          id: this.generateId()
        })
      },
      () => this.clearInputField()
    );
  };

  clearInputField = () => {
    this.setState({ ...this.state, newItem: "" });
  };

  onDeleteItem = (id) => () => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ ...this.state, items: newItems });
  };
  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            marginBottom: "5px"
          }}
        >
          <input
            name="newItem"
            value={this.state.newItem}
            onChange={this.onChangeHandler}
          />
          <button
            onClick={this.onAddItemHandler}
            style={{
              marginLeft: "5px"
            }}
          >
            Add item
          </button>
        </div>
        <div>
          <ol
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            {this.state.items.map((item) => (
              <li
                key={item.id}
                style={{
                  cursor: "pointer"
                }}
                onClick={this.onDeleteItem(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

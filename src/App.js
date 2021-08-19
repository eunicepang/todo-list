import React from "react";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentItem: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    this.setState({ currentItem: event.target.value });
  }

  addItem(props) {
    this.setState({
      list: this.state.list.concat([{ item: this.state.currentItem }]),
    });
    this.setState({ currentItem: "" });
  }

  deleteItem(event) {
    const newList = this.state.list.filter(
      (listItem) => listItem.item !== event.target.id
    );

    this.setState({ list: newList });
  }

  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <input
          type="text"
          placeholder="Item name"
          value={this.state.currentItem}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addItem}>Add Item</button>
        <br></br>
        <br></br>
        <List data={this.state.list} onComplete={this.deleteItem} />
      </div>
    );
  }
}

export default App;

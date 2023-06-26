import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("Please enter name and email!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <button className="ui button blue" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
// const AddContact = () => {
//   return <div></div>;
// };

export default AddContact;

import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter name" />
            <label>Email</label>
            <input type="email" name="email" placeholder="enter email" />
            <button className="ui button blue">Add</button>
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

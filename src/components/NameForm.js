import React from 'react';

const NameForm = React.createClass({
  getInitialState() {
    return {
      editing: true
    }
  },

  submitForm(e) {
    e.preventDefault();
    const { name, image, bio } = this.refs;

    let newProfile = {
      name: name.value,
      image: image.value,
      bio: bio.value
    }

    name.value = '';
    image.value = '';
    bio.value = '';
    name.focus();

    this.props.addName(newProfile);
    this.editingOff();
  },

  editingOff() {
    this.setState({
      editing: false
    })
  },

  editingOn() {
    this.setState({
      editing: true
    })
  },

  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.submitForm}>
          Name:
          <input ref='name' type="text" required/>
          image URL:
          <input ref='image' type="text"/>
          Bio:
          <input ref='bio' type="text"/>
          <button>Submit</button>
          <button onClick={this.editingOff}>Cancel</button>
        </form>
      )
    } else {

      return (
        <button onClick={this.editingOn}>Edit</button>
      )
    }
  }
})

export default NameForm;

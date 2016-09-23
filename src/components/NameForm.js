import React from 'react';

const NameForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { name, image, bio } = this.refs;

    let newProfile = {
      name: name.value,
      image: image.value,
      bio: bio.value,
      editing: false
    }

    name.value = '';
    image.value = '';
    bio.value = '';
    name.focus();

    this.props.addName(newProfile);
  },

  render() {
    return (
      <form onSubmit={this.submitForm}>
        Name:
        <input ref='name' type="text" required/>
        image URL:
        <input ref='image' type="text"/>
        Bio:
        <input ref='bio' type="text"/>
        <button>Submit</button>
      </form>
    )
  }
})

export default NameForm;

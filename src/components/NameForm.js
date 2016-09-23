import React from 'react';

const NameForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { nameInput, image } = this.refs;

    let newName = nameInput.value;
    let newImage = image;
    nameInput.value = '';
    nameInput.focus();

    this.props.addName(newName);

  },

  render() {
    return (
      <form onSubmit={this.submitForm}>
        Name:
        <input ref='nameInput' type="text" required/>
        image URL:
        <input ref='image' type="text"/>
        <button>Submit</button>
      </form>
    )
  }
})

export default NameForm;

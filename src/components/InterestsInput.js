import React from 'react';

const InterestsInput = React.createClass({
  getInitialState() {
    return {
      adding: false
    }
  },

  submitForm(e) {
    e.preventDefault();

    let newInterest = this.refs.interestInput;
    this.props.addInterest(newInterest);
  },

  cancel(e) {
    e.preventDefault();
    this.addingOff();
  },

  addingOn() {
    this.setState({
      adding: true
    })
  },

  addingOff() {
    this.setState({
      adding: false
    })
  },

  render() {
    if (this.state.adding) {
      return (
        <div>
          <h3>Interests:</h3>
          <form onSubmit={this.submitForm}>
            <input ref="interestInput" type="text"/>
            <button>Add</button>
            <button onClick={this.cancel}>Cancel</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Interests:</h3>
          <button onClick={this.addingOn}>Add</button>
        </div>
      )
    }
  }

})

export default InterestsInput;

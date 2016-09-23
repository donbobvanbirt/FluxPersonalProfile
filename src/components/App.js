import React from 'react';
import NameForm from './NameForm';
import NameList from './NameList';

import NameActions from '../actions/NameActions'
import NameStore from '../stores/NameStore'

const App = React.createClass({
  getInitialState() {
    return {
      name: NameStore.getAll()
    }
  },

  // listen for event and immediatly update state with data from store
  componentWillMount() {
    NameStore.startListening(this._onChange);
  },

  coponentWillUnmount() {
    NameStore.stopListening(this._onChange);
  },

  _onChange() {
    this.setState({
      name: NameStore.getAll()
    });
  },

  addName(newName) {
    NameActions.createName(newName);
    // NameActions.addImage(image);
  },

  render () {
    const { name } = this.state;
    console.log('name:', name);
    return (
      <div className="container">
        <h1>Flux Personal Profile</h1>
        <NameForm addName={this.addName} />
        <NameList name={name} />
      </div>
    )
  }
})

export default App;

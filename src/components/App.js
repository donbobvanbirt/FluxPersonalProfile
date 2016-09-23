import React from 'react';
import NameForm from './NameForm';
import NameList from './NameList';

import NameActions from '../actions/NameActions'
import NameStore from '../stores/NameStore'

const App = React.createClass({
  getInitialState() {
    return {
      name: ''
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
    this.setState( NameStore.getAll() );
  },

  addName(newProfile) {
    // let newProfile = {
    //   name: name,
    //   image: image,
    //   bio: bio
    // }

    NameActions.createProfile(newProfile);
    // NameActions.addImage(image);
  },

  render () {
    const { name, image, bio, editing } = this.state;
    // console.log('name:', name);
    return (
      <div className="container">
        <h1>Flux Personal Profile</h1>
        <NameForm addName={this.addName} />
        <NameList name={name} image={image} bio={bio} editing={editing}/>
      </div>
    )
  }
})

export default App;

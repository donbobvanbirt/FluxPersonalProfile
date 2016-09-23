import React from 'react';

import NameForm from './NameForm';
import NameList from './NameList';
import InterestsList from './InterestsList'
import InterestsInput from './InterestsInput';

import NameActions from '../actions/NameActions'
import InterestsActions from '../actions/InterestsActions'
import NameStore from '../stores/NameStore'
import InterestsStore from '../stores/InterestsStore'

const App = React.createClass({
  getInitialState() {
    return {
      name: ''
    }
  },

  // listen for event and immediatly update state with data from store
  componentWillMount() {
    NameStore.startListening(this._onChange);
    InterestsStore.startListening(this._onChange);
  },

  coponentWillUnmount() {
    NameStore.stopListening(this._onChange);
    InterestsStore.stopListening(this._onChange);
  },

  _onChange() {
    const pro = NameStore.getAll();
    this.setState({
      name: pro.name,
      image: pro.image,
      bio: pro.bio,
      interests: InterestsStore.getAll()
     });
    console.log('state', this.state);
  },

  addName(newProfile) {
    NameActions.createProfile(newProfile);
  },

  addInterest(interest) {
    InterestsActions.addInterest(interest);
  },

  render () {
    const { name, image, bio, interests } = this.state;
    // console.log('name:', name);
    return (
      <div className="container">
        <h1>Flux Personal Profile</h1>
        <NameForm addName={this.addName} />
        <NameList name={name} image={image} bio={bio}/>
        <InterestsInput addInterest={this.addInterest}/>
        <InterestsList interests={interests}/>
      </div>
    )
  }
})

export default App;

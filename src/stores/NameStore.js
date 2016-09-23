import AppDispatcher from '../AppDispatcher'; // store is watching Dispatcher
import { EventEmitter } from 'events';

let _profile = { name: '', image: '', bio:''};

const NameStore = Object.assign({}, EventEmitter.prototype, {

  startListening(callback) {
    this.on('CHANGE', callback);
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  },

  getAll() {
    return _profile;
    // console.log('_profile:', _profile);
  }
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  console.log('NameStore action:', action);

  switch(type) {
    case 'CREATE_NAME':
      // const profile = {
      //   bio: payload.bio,
      //   image: payload.image,
      //   name: payload.name
      // }
      // console.log('profile', profile);
      _profile = Object.assign({}, payload);
      console.log('_profile', _profile);
      // _profile = profile;

      NameStore.emit('CHANGE');
    break;
  }
})

export default NameStore;

import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _interest = [];

const InterestsStore = Object.assign({}, EventEmitter.prototype, {

  startListening(cb) {
    this.on('CHANGE', cb);
  },

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  },

  getAll() {
    return _interest;
  }
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_INTEREST':
      _interest.push(interest);
      InterestsStore.emit('CHANGE');
    break;
  }
});

export default InterestsStore;

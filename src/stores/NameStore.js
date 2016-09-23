import AppDispatcher from '../AppDispatcher'; // store is watching Dispatcher
import { EventEmitter } from 'events';

let _name = [];

const NameStore = Object.assign({}, EventEmitter.prototype, {

  startListening(callback) {
    this.on('CHANGE', callback);
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  },

  getAll() {
    return _name;
    // console.log('_name:', _name);
  }
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  console.log('NameStore action:', action);

  switch(type) {
    case 'CREATE_NAME':
      const { name } = payload;
      _name = name;

      NameStore.emit('CHANGE');
    break;
  }
})

export default NameStore;

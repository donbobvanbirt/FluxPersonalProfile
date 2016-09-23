import AppDispatcher from '../AppDispatcher'

const NameActions = {
  createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name }
    })
  },

  // addImage(image) {
  //   AppDispatcher.dispatch({
  //     type: 'ADD_IMAGE',
  //     payload: { image }
  //   })
  // }
}

export default NameActions;
